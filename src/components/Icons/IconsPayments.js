import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class IconsPayments extends Component {
    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item"><NavLink to="/icons" className="nav-link" >Fontawesome</NavLink></li>
                                <li className="nav-item"><NavLink to="/icons-feather" className="nav-link " >Feather</NavLink></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" data-toggle="dropdown" href="/#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
                                    <div className="dropdown-menu">
                                        <NavLink to="/icons-line" className="dropdown-item">Line Icons</NavLink>
                                        <NavLink to="/icons-flag" className="dropdown-item">Flags Icons</NavLink>
                                        <NavLink to="/icons-payments" className="dropdown-item active">Payments Icon</NavLink>
                                    </div>
                                </li>
                            </ul>
                            <div className="header-action">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><i className="fe fe-plus mr-2" />Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body icons-list-wrap">
                                        <ul className="icons-list">
                                            <li className="icons-list-item"><i className="payment payment-2checkout" data-toggle="tooltip" title="payment payment-2checkout" /></li>
                                            <li className="icons-list-item"><i className="payment payment-alipay" data-toggle="tooltip" title="payment payment-alipay" /></li>
                                            <li className="icons-list-item"><i className="payment payment-amazon" data-toggle="tooltip" title="payment payment-amazon" /></li>
                                            <li className="icons-list-item"><i className="payment payment-americanexpress" data-toggle="tooltip" title="payment payment-americanexpress" /></li>
                                            <li className="icons-list-item"><i className="payment payment-applepay" data-toggle="tooltip" title="payment payment-applepay" /></li>
                                            <li className="icons-list-item"><i className="payment payment-bancontact" data-toggle="tooltip" title="payment payment-bancontact" /></li>
                                            <li className="icons-list-item"><i className="payment payment-bitcoin" data-toggle="tooltip" title="payment payment-bitcoin" /></li>
                                            <li className="icons-list-item"><i className="payment payment-bitpay" data-toggle="tooltip" title="payment payment-bitpay" /></li>
                                            <li className="icons-list-item"><i className="payment payment-cirrus" data-toggle="tooltip" title="payment payment-cirrus" /></li>
                                            <li className="icons-list-item"><i className="payment payment-clickandbuy" data-toggle="tooltip" title="payment payment-clickandbuy" /></li>
                                            <li className="icons-list-item"><i className="payment payment-coinkite" data-toggle="tooltip" title="payment payment-coinkite" /></li>
                                            <li className="icons-list-item"><i className="payment payment-dinersclub" data-toggle="tooltip" title="payment payment-dinersclub" /></li>
                                            <li className="icons-list-item"><i className="payment payment-directdebit" data-toggle="tooltip" title="payment payment-directdebit" /></li>
                                            <li className="icons-list-item"><i className="payment payment-discover" data-toggle="tooltip" title="payment payment-discover" /></li>
                                            <li className="icons-list-item"><i className="payment payment-dwolla" data-toggle="tooltip" title="payment payment-dwolla" /></li>
                                            <li className="icons-list-item"><i className="payment payment-ebay" data-toggle="tooltip" title="payment payment-ebay" /></li>
                                            <li className="icons-list-item"><i className="payment payment-eway" data-toggle="tooltip" title="payment payment-eway" /></li>
                                            <li className="icons-list-item"><i className="payment payment-giropay" data-toggle="tooltip" title="payment payment-giropay" /></li>
                                            <li className="icons-list-item"><i className="payment payment-googlewallet" data-toggle="tooltip" title="payment payment-googlewallet" /></li>
                                            <li className="icons-list-item"><i className="payment payment-ingenico" data-toggle="tooltip" title="payment payment-ingenico" /></li>
                                            <li className="icons-list-item"><i className="payment payment-jcb" data-toggle="tooltip" title="payment payment-jcb" /></li>
                                            <li className="icons-list-item"><i className="payment payment-klarna" data-toggle="tooltip" title="payment payment-klarna" /></li>
                                            <li className="icons-list-item"><i className="payment payment-laser" data-toggle="tooltip" title="payment payment-laser" /></li>
                                            <li className="icons-list-item"><i className="payment payment-maestro" data-toggle="tooltip" title="payment payment-maestro" /></li>
                                            <li className="icons-list-item"><i className="payment payment-mastercard" data-toggle="tooltip" title="payment payment-mastercard" /></li>
                                            <li className="icons-list-item"><i className="payment payment-monero" data-toggle="tooltip" title="payment payment-monero" /></li>
                                            <li className="icons-list-item"><i className="payment payment-neteller" data-toggle="tooltip" title="payment payment-neteller" /></li>
                                            <li className="icons-list-item"><i className="payment payment-ogone" data-toggle="tooltip" title="payment payment-ogone" /></li>
                                            <li className="icons-list-item"><i className="payment payment-okpay" data-toggle="tooltip" title="payment payment-okpay" /></li>
                                            <li className="icons-list-item"><i className="payment payment-paybox" data-toggle="tooltip" title="payment payment-paybox" /></li>
                                            <li className="icons-list-item"><i className="payment payment-paymill" data-toggle="tooltip" title="payment payment-paymill" /></li>
                                            <li className="icons-list-item"><i className="payment payment-payone" data-toggle="tooltip" title="payment payment-payone" /></li>
                                            <li className="icons-list-item"><i className="payment payment-payoneer" data-toggle="tooltip" title="payment payment-payoneer" /></li>
                                            <li className="icons-list-item"><i className="payment payment-paypal" data-toggle="tooltip" title="payment payment-paypal" /></li>
                                            <li className="icons-list-item"><i className="payment payment-paysafecard" data-toggle="tooltip" title="payment payment-paysafecard" /></li>
                                            <li className="icons-list-item"><i className="payment payment-payu" data-toggle="tooltip" title="payment payment-payu" /></li>
                                            <li className="icons-list-item"><i className="payment payment-payza" data-toggle="tooltip" title="payment payment-payza" /></li>
                                            <li className="icons-list-item"><i className="payment payment-ripple" data-toggle="tooltip" title="payment payment-ripple" /></li>
                                            <li className="icons-list-item"><i className="payment payment-sage" data-toggle="tooltip" title="payment payment-sage" /></li>
                                            <li className="icons-list-item"><i className="payment payment-sepa" data-toggle="tooltip" title="payment payment-sepa" /></li>
                                            <li className="icons-list-item"><i className="payment payment-shopify" data-toggle="tooltip" title="payment payment-shopify" /></li>
                                            <li className="icons-list-item"><i className="payment payment-skrill" data-toggle="tooltip" title="payment payment-skrill" /></li>
                                            <li className="icons-list-item"><i className="payment payment-solo" data-toggle="tooltip" title="payment payment-solo" /></li>
                                            <li className="icons-list-item"><i className="payment payment-square" data-toggle="tooltip" title="payment payment-square" /></li>
                                            <li className="icons-list-item"><i className="payment payment-stripe" data-toggle="tooltip" title="payment payment-stripe" /></li>
                                            <li className="icons-list-item"><i className="payment payment-switch" data-toggle="tooltip" title="payment payment-switch" /></li>
                                            <li className="icons-list-item"><i className="payment payment-ukash" data-toggle="tooltip" title="payment payment-ukash" /></li>
                                            <li className="icons-list-item"><i className="payment payment-unionpay" data-toggle="tooltip" title="payment payment-unionpay" /></li>
                                            <li className="icons-list-item"><i className="payment payment-verifone" data-toggle="tooltip" title="payment payment-verifone" /></li>
                                            <li className="icons-list-item"><i className="payment payment-verisign" data-toggle="tooltip" title="payment payment-verisign" /></li>
                                            <li className="icons-list-item"><i className="payment payment-visa" data-toggle="tooltip" title="payment payment-visa" /></li>
                                            <li className="icons-list-item"><i className="payment payment-webmoney" data-toggle="tooltip" title="payment payment-webmoney" /></li>
                                            <li className="icons-list-item"><i className="payment payment-westernunion" data-toggle="tooltip" title="payment payment-westernunion" /></li>
                                            <li className="icons-list-item"><i className="payment payment-worldpay" data-toggle="tooltip" title="payment payment-worldpay" /></li>
                                            <li className="icons-list-item"><i className="payment payment-2checkout-dark" data-toggle="tooltip" title="payment payment-2checkout-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-alipay-dark" data-toggle="tooltip" title="payment payment-alipay-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-amazon-dark" data-toggle="tooltip" title="payment payment-amazon-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-americanexpress-dark" data-toggle="tooltip" title="payment payment-americanexpress-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-applepay-dark" data-toggle="tooltip" title="payment payment-applepay-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-bancontact-dark" data-toggle="tooltip" title="payment payment-bancontact-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-bitcoin-dark" data-toggle="tooltip" title="payment payment-bitcoin-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-bitpay-dark" data-toggle="tooltip" title="payment payment-bitpay-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-cirrus-dark" data-toggle="tooltip" title="payment payment-cirrus-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-clickandbuy-dark" data-toggle="tooltip" title="payment payment-clickandbuy-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-coinkite-dark" data-toggle="tooltip" title="payment payment-coinkite-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-dinersclub-dark" data-toggle="tooltip" title="payment payment-dinersclub-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-directdebit-dark" data-toggle="tooltip" title="payment payment-directdebit-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-discover-dark" data-toggle="tooltip" title="payment payment-discover-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-dwolla-dark" data-toggle="tooltip" title="payment payment-dwolla-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-ebay-dark" data-toggle="tooltip" title="payment payment-ebay-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-eway-dark" data-toggle="tooltip" title="payment payment-eway-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-giropay-dark" data-toggle="tooltip" title="payment payment-giropay-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-googlewallet-dark" data-toggle="tooltip" title="payment payment-googlewallet-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-ingenico-dark" data-toggle="tooltip" title="payment payment-ingenico-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-jcb-dark" data-toggle="tooltip" title="payment payment-jcb-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-klarna-dark" data-toggle="tooltip" title="payment payment-klarna-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-laser-dark" data-toggle="tooltip" title="payment payment-laser-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-maestro-dark" data-toggle="tooltip" title="payment payment-maestro-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-mastercard-dark" data-toggle="tooltip" title="payment payment-mastercard-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-monero-dark" data-toggle="tooltip" title="payment payment-monero-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-neteller-dark" data-toggle="tooltip" title="payment payment-neteller-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-ogone-dark" data-toggle="tooltip" title="payment payment-ogone-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-okpay-dark" data-toggle="tooltip" title="payment payment-okpay-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-paybox-dark" data-toggle="tooltip" title="payment payment-paybox-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-paymill-dark" data-toggle="tooltip" title="payment payment-paymill-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-payone-dark" data-toggle="tooltip" title="payment payment-payone-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-payoneer-dark" data-toggle="tooltip" title="payment payment-payoneer-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-paypal-dark" data-toggle="tooltip" title="payment payment-paypal-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-paysafecard-dark" data-toggle="tooltip" title="payment payment-paysafecard-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-payu-dark" data-toggle="tooltip" title="payment payment-payu-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-payza-dark" data-toggle="tooltip" title="payment payment-payza-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-ripple-dark" data-toggle="tooltip" title="payment payment-ripple-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-sage-dark" data-toggle="tooltip" title="payment payment-sage-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-sepa-dark" data-toggle="tooltip" title="payment payment-sepa-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-shopify-dark" data-toggle="tooltip" title="payment payment-shopify-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-skrill-dark" data-toggle="tooltip" title="payment payment-skrill-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-solo-dark" data-toggle="tooltip" title="payment payment-solo-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-square-dark" data-toggle="tooltip" title="payment payment-square-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-stripe-dark" data-toggle="tooltip" title="payment payment-stripe-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-switch-dark" data-toggle="tooltip" title="payment payment-switch-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-ukash-dark" data-toggle="tooltip" title="payment payment-ukash-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-unionpay-dark" data-toggle="tooltip" title="payment payment-unionpay-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-verifone-dark" data-toggle="tooltip" title="payment payment-verifone-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-verisign-dark" data-toggle="tooltip" title="payment payment-verisign-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-visa-dark" data-toggle="tooltip" title="payment payment-visa-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-webmoney-dark" data-toggle="tooltip" title="payment payment-webmoney-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-westernunion-dark" data-toggle="tooltip" title="payment payment-westernunion-dark" /></li>
                                            <li className="icons-list-item"><i className="payment payment-worldpay-dark" data-toggle="tooltip" title="payment payment-worldpay-dark" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    fixNavbar: state.settings.isFixNavbar
})

const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(IconsPayments);