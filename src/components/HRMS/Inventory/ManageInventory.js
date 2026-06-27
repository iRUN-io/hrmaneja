/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import EmptyState from '../../EmptyState';
import { getUser } from '../../../config/common';
import {
    createInventoryItem,
    deleteInventoryItem,
    getInventoryItems,
    getCategories, // Add API service function to fetch categories
} from '../../../services/inventory'; // Update API service import
import { toast } from "material-react-toastify";
import UpdateQuantityModal from './UpdateInventory';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import Loader from '../../common/loader';
import { createActivity } from '../../../services/activities';

function ManageInventory(props) {
    const { fixNavbar } = props;

    const [formState, setFormState] = useState({
        name: '',
        quantity: 0,
        category: '', // Add category field to the state
    });

    const [loading, setLoading] = useState(true);
    const [inventoryItems, setInventoryItems] = useState([]);
    const [categories, setCategories] = useState([]); // Add state variable for categories
    const [user, setUser] = useState({});
    const [searchQuery, setSearchInput] = useState('');

    // Add pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);


    // Function to open the update quantity modal for a specific item
    const handleOpenUpdateModal = (itemId) => {
        setSelectedItemId(itemId);
        setShowUpdateModal(true);
    };

    // Function to close the update quantity modal
    const handleCloseUpdateModal = () => {
        setSelectedItemId(null);
        setShowUpdateModal(false);
    };

    useEffect(() => {
        // setLoading(true);
        async function fetchData() {
            
            const user = await getUser();

            if (user) {
                const isAdmin = user?.role === "HR Manager";

                if (!isAdmin) {
                    window.location.href = '/';
                }

                const response = await getInventoryItems(user.company_id);

                const categoryResponse = await getCategories(); // Fetch categories

                setUser(user);
                setInventoryItems(response);
                setCategories(categoryResponse); // Set categories in state
                setLoading(false);
            }
        }
        fetchData();
        
    }, []);

    const updateForm = e => {
        const { value, name } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitInventoryItem = async () => {
        try {
            setFormState({ ...formState });

            if (formState.name === '' || formState.quantity <= 0 || formState.category === '') {
                toast.error('Please fill all the fields');
                return;
            }

            const body = {
                name: formState.name,
                quantity: formState.quantity,
                company_id: user.company_id,
                category: formState.category, // Include category in the request
            };

            const response = await createInventoryItem(body);

            if (response.id) {

                await createActivity(
                    {
                      name: 'Create Inventory',
                      employee_id: user.employee_id,
                      activity: `${user.name} created an inventory with name; ${body.name}`,
                      activity_name: 'Creation',
                      user: user.name,
                      company_id: user.company_id
                    }
                  )
                setInventoryItems([...inventoryItems, response]);
                
                toast.success("Inventory item added successfully");
            } else {
                toast.info(response.message);
            }

            setFormState({
                name: '',
                quantity: 0,
                category: '', // Reset category field
            });
        } catch (err) {
            toast.error("Error, try again");
            setFormState({ ...formState });
        }
    };

    const removeInventoryItem = async (itemId) => {
        try {
            const response = await deleteInventoryItem(itemId);

            if (response.message) {
                const newInventoryItems = inventoryItems.filter(item => item.id !== itemId);
                setInventoryItems(newInventoryItems);
                toast.info(response.message);
            }
        } catch (err) {
            toast.error("Error, try again");
        }
    };


    const getLeaveBySearchQuery = (
        inventoryItems,
        searchQuery,
    ) => {
        return inventoryItems.filter(leave =>
            leave.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const allInventoryArray = useMemo(() => {
        let allInventory = inventoryItems;
        if (searchQuery) {
            allInventory = getLeaveBySearchQuery(allInventory, searchQuery);
        }

        return allInventory || [];
    }, [inventoryItems, searchQuery]);

    // Pagination calculation
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allInventoryArray.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allInventoryArray.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    if (loading ) {
		return <Loader />
	}

    return (
        <>
            <div className={`section-body ${fixNavbar ? "marginTop" : ""} mt-3`}>
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center">
                        <ul className="nav nav-tabs page-header-tab">
                            <li className="nav-item">
                                <Link to={'/admin/settings'} className="nav-link active">
                                    <i className="fa fa-arrow-left" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="row row-cards">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="page-subtitle ml-0">Inventory Items</div>
                                    <div className="page-options d-flex">
                                        <div className="input-icon ml-2">
                                            <span className="input-icon-addon">
                                                <i className="fe fe-search" />
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search inventory items"
                                                value={searchQuery}
                                                onChange={(e) => setSearchInput(e.target.value)}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary ml-2" data-toggle="modal" data-target="#exampleModal">
                                            Add New Item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {currentItems.length === 0 ? (
                        <div className='card'>
                            <EmptyState />
                        </div>
                    ) : (
                        <div className="row row-cards">
                            {currentItems.map((item) => (
                                <div key={item.id} className="col-sm-6 col-lg-4">
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center px-2">
                                            <div>
                                                <div>{item.name}</div>
                                                <small className="d-block text-muted">Quantity: {item.quantity}</small>
                                                <small className="d-block text-muted">Category: {item.category}</small>
                                            </div>
                                            <div className="ml-auto text-muted">
                                                <button onClick={() => handleOpenUpdateModal(item.id)} style={{ marginTop: 10 }} className="btn btn-sm btn-outline-primary">Update Quantity</button>
                                            </div>
                                        </div>
                                        <OverlayTrigger trigger="focus" placement="bottom" delay={1}
                                            overlay={
                                                <Popover id="popover-basic">
                                                    <Popover.Header as="p">Confirm Delete</Popover.Header>
                                                    <Popover.Body>
                                                        <div className="clearfix" >
                                                            <button style={{ margin: '10px' }} type="" className="btn btn-sm btn-success">Cancel</button>
                                                            <button style={{ margin: '10px' }} onClick={() => removeInventoryItem(item.id)} type="button" className="btn btn-sm btn-danger">Delete</button>
                                                        </div>
                                                    </Popover.Body>
                                                </Popover>
                                            }>
                                            <button type="button" className="btn btn-sm btn-icon js-sweetalert" title="Delete" data-type="confirm"><i className="fe fe-trash text-danger" /></button>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {/* Pagination */}
                    <div className="row justify-content-center">
                        <nav>
                            <ul className="pagination">
                                {pageNumbers.map(number => (
                                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                        <a onClick={() => paginate(number)} className="page-link" href="javascript:void(0)">
                                            {number}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <UpdateQuantityModal
                show={showUpdateModal}
                onClose={handleCloseUpdateModal}
                initialQuantity={inventoryItems.find((item) => item.id === selectedItemId)?.quantity}
                itemId={selectedItemId}
            />
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Inventory Item</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row clearfix">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="form-label">Item Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder=""
                                                    name='name'
                                                    value={formState?.name}
                                                    onChange={updateForm}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="form-label">Quantity</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder=""
                                                    name='quantity'
                                                    value={formState?.quantity}
                                                    onChange={updateForm}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="form-label">Category</label>
                                                <select
                                                    className="form-control"
                                                    name="category"
                                                    value={formState?.category}
                                                    onChange={updateForm}
                                                >
                                                    <option value="">Select a category</option>
                                                    {categories.map((category) => (
                                                        <option key={category.id} value={category.name}>
                                                            {category.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button onClick={submitInventoryItem} className="btn right btn-primary">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManageInventory;
