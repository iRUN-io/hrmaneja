import React, {  useEffect, useState } from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css"
import { getUser } from '../../config/common';
import { getEmployeeTask } from '../../services/task';
import Loader from './loader';

function Fullcalender (props) {

    const [tasks, setTasks] = useState([]);
	const [,setUser] = useState(getUser());
	const [loading, setLoading] = useState([]);
	
	useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const user = getUser();
            if (user) {
                const allTasks = await getEmployeeTask(user.employee_id);
				setTasks(allTasks.slice(0, 5));
                setLoading(false);
                setUser(user);

            }
        }
        fetchData();
    }, []);

    const events = tasks.map((task) => {
        return {
            title: task.note,
            start: task.createdAt,
            end: task.due_date,
        }
    });

    if (loading) {
		return <Loader/>
	}

    
        return (
            <div id="example-component">
                <FullCalendar
                    id="your-custom-ID"
                    header={{
                        left: 'prev,next today myCustomButton',
                        center: 'title',
                        right: 'month,basicWeek,basicDay'
                    }}
                    defaultDate={new Date()}
                    navLinks={true} // can click day/week names to navigate views
                    editable={true}
                    eventLimit={true} // allow "more" link when too many events
                    events={events}
                />
            </div>
        );
    }

export default Fullcalender;
