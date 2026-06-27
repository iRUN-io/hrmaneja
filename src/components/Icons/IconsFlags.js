import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

class IconsFlags extends Component {
    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""}`}>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item"><NavLink to="/icons" className="nav-link" >Fontawesome</NavLink></li>
                                <li className="nav-item"><NavLink to="/icons-feather" className="nav-link " >Feather</NavLink></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" data-toggle="dropdown" href="/#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
                                    <div className="dropdown-menu">
                                        <NavLink to="/icons-line" className="dropdown-item">Line Icons</NavLink>
                                        <NavLink to="/icons-flag" className="dropdown-item active">Flags Icons</NavLink>
                                        <NavLink to="/icons-payments" className="dropdown-item">Payments Icon</NavLink>

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
                                            <li className="icons-list-item"><i className="flag flag-ad" data-toggle="tooltip" title="flag flag-ad" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ae" data-toggle="tooltip" title="flag flag-ae" /></li>
                                            <li className="icons-list-item"><i className="flag flag-af" data-toggle="tooltip" title="flag flag-af" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ag" data-toggle="tooltip" title="flag flag-ag" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ai" data-toggle="tooltip" title="flag flag-ai" /></li>
                                            <li className="icons-list-item"><i className="flag flag-al" data-toggle="tooltip" title="flag flag-al" /></li>
                                            <li className="icons-list-item"><i className="flag flag-am" data-toggle="tooltip" title="flag flag-am" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ao" data-toggle="tooltip" title="flag flag-ao" /></li>
                                            <li className="icons-list-item"><i className="flag flag-aq" data-toggle="tooltip" title="flag flag-aq" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ar" data-toggle="tooltip" title="flag flag-ar" /></li>
                                            <li className="icons-list-item"><i className="flag flag-as" data-toggle="tooltip" title="flag flag-as" /></li>
                                            <li className="icons-list-item"><i className="flag flag-at" data-toggle="tooltip" title="flag flag-at" /></li>
                                            <li className="icons-list-item"><i className="flag flag-au" data-toggle="tooltip" title="flag flag-au" /></li>
                                            <li className="icons-list-item"><i className="flag flag-aw" data-toggle="tooltip" title="flag flag-aw" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ax" data-toggle="tooltip" title="flag flag-ax" /></li>
                                            <li className="icons-list-item"><i className="flag flag-az" data-toggle="tooltip" title="flag flag-az" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ba" data-toggle="tooltip" title="flag flag-ba" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bb" data-toggle="tooltip" title="flag flag-bb" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bd" data-toggle="tooltip" title="flag flag-bd" /></li>
                                            <li className="icons-list-item"><i className="flag flag-be" data-toggle="tooltip" title="flag flag-be" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bf" data-toggle="tooltip" title="flag flag-bf" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bg" data-toggle="tooltip" title="flag flag-bg" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bh" data-toggle="tooltip" title="flag flag-bh" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bi" data-toggle="tooltip" title="flag flag-bi" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bj" data-toggle="tooltip" title="flag flag-bj" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bl" data-toggle="tooltip" title="flag flag-bl" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bm" data-toggle="tooltip" title="flag flag-bm" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bn" data-toggle="tooltip" title="flag flag-bn" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bo" data-toggle="tooltip" title="flag flag-bo" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bq" data-toggle="tooltip" title="flag flag-bq" /></li>
                                            <li className="icons-list-item"><i className="flag flag-br" data-toggle="tooltip" title="flag flag-br" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bs" data-toggle="tooltip" title="flag flag-bs" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bt" data-toggle="tooltip" title="flag flag-bt" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bv" data-toggle="tooltip" title="flag flag-bv" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bw" data-toggle="tooltip" title="flag flag-bw" /></li>
                                            <li className="icons-list-item"><i className="flag flag-by" data-toggle="tooltip" title="flag flag-by" /></li>
                                            <li className="icons-list-item"><i className="flag flag-bz" data-toggle="tooltip" title="flag flag-bz" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ca" data-toggle="tooltip" title="flag flag-ca" /></li>
                                            <li className="icons-list-item"><i className="flag flag-cc" data-toggle="tooltip" title="flag flag-cc" /></li>
                                            <li className="icons-list-item"><i className="flag flag-cd" data-toggle="tooltip" title="flag flag-cd" /></li>
                                            <li className="icons-list-item"><i className="flag flag-cf" data-toggle="tooltip" title="flag flag-cf" /></li>
                                            <li className="icons-list-item"><i className="flag flag-cg" data-toggle="tooltip" title="flag flag-cg" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ch" data-toggle="tooltip" title="flag flag-ch" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ci" data-toggle="tooltip" title="flag flag-ci" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ck" data-toggle="tooltip" title="flag flag-ck" /></li>
                                            <li className="icons-list-item"><i className="flag flag-cl" data-toggle="tooltip" title="flag flag-cl" /></li>
                                            <li className="icons-list-item"><i className="flag flag-cm" data-toggle="tooltip" title="flag flag-cm" /></li>
                                            <li className="icons-list-item"><i className="flag flag-cn" data-toggle="tooltip" title="flag flag-cn" /></li>
                                            <li className="icons-list-item"><i className="flag flag-co" data-toggle="tooltip" title="flag flag-co" /></li>
                                            <li className="icons-list-item"><i className="flag flag-cr" data-toggle="tooltip" title="flag flag-cr" /></li>
                                            <li className="icons-list-item"><i className="flag flag-cu" data-toggle="tooltip" title="flag flag-cu" /></li>
                                            <li className="icons-list-item"><i className="flag flag-cv" data-toggle="tooltip" title="flag flag-cv" /></li>
                                            <li className="icons-list-item"><i className="flag flag-cw" data-toggle="tooltip" title="flag flag-cw" /></li>
                                            <li className="icons-list-item"><i className="flag flag-cx" data-toggle="tooltip" title="flag flag-cx" /></li>
                                            <li className="icons-list-item"><i className="flag flag-cy" data-toggle="tooltip" title="flag flag-cy" /></li>
                                            <li className="icons-list-item"><i className="flag flag-cz" data-toggle="tooltip" title="flag flag-cz" /></li>
                                            <li className="icons-list-item"><i className="flag flag-de" data-toggle="tooltip" title="flag flag-de" /></li>
                                            <li className="icons-list-item"><i className="flag flag-dj" data-toggle="tooltip" title="flag flag-dj" /></li>
                                            <li className="icons-list-item"><i className="flag flag-dk" data-toggle="tooltip" title="flag flag-dk" /></li>
                                            <li className="icons-list-item"><i className="flag flag-dm" data-toggle="tooltip" title="flag flag-dm" /></li>
                                            <li className="icons-list-item"><i className="flag flag-do" data-toggle="tooltip" title="flag flag-do" /></li>
                                            <li className="icons-list-item"><i className="flag flag-dz" data-toggle="tooltip" title="flag flag-dz" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ec" data-toggle="tooltip" title="flag flag-ec" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ee" data-toggle="tooltip" title="flag flag-ee" /></li>
                                            <li className="icons-list-item"><i className="flag flag-eg" data-toggle="tooltip" title="flag flag-eg" /></li>
                                            <li className="icons-list-item"><i className="flag flag-eh" data-toggle="tooltip" title="flag flag-eh" /></li>
                                            <li className="icons-list-item"><i className="flag flag-er" data-toggle="tooltip" title="flag flag-er" /></li>
                                            <li className="icons-list-item"><i className="flag flag-es" data-toggle="tooltip" title="flag flag-es" /></li>
                                            <li className="icons-list-item"><i className="flag flag-et" data-toggle="tooltip" title="flag flag-et" /></li>
                                            <li className="icons-list-item"><i className="flag flag-eu" data-toggle="tooltip" title="flag flag-eu" /></li>
                                            <li className="icons-list-item"><i className="flag flag-fi" data-toggle="tooltip" title="flag flag-fi" /></li>
                                            <li className="icons-list-item"><i className="flag flag-fj" data-toggle="tooltip" title="flag flag-fj" /></li>
                                            <li className="icons-list-item"><i className="flag flag-fk" data-toggle="tooltip" title="flag flag-fk" /></li>
                                            <li className="icons-list-item"><i className="flag flag-fm" data-toggle="tooltip" title="flag flag-fm" /></li>
                                            <li className="icons-list-item"><i className="flag flag-fo" data-toggle="tooltip" title="flag flag-fo" /></li>
                                            <li className="icons-list-item"><i className="flag flag-fr" data-toggle="tooltip" title="flag flag-fr" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ga" data-toggle="tooltip" title="flag flag-ga" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gb" data-toggle="tooltip" title="flag flag-gb" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gb-eng" data-toggle="tooltip" title="flag flag-gb-eng" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gb-nir" data-toggle="tooltip" title="flag flag-gb-nir" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gb-sct" data-toggle="tooltip" title="flag flag-gb-sct" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gb-wls" data-toggle="tooltip" title="flag flag-gb-wls" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gd" data-toggle="tooltip" title="flag flag-gd" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ge" data-toggle="tooltip" title="flag flag-ge" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gf" data-toggle="tooltip" title="flag flag-gf" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gg" data-toggle="tooltip" title="flag flag-gg" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gh" data-toggle="tooltip" title="flag flag-gh" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gi" data-toggle="tooltip" title="flag flag-gi" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gl" data-toggle="tooltip" title="flag flag-gl" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gm" data-toggle="tooltip" title="flag flag-gm" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gn" data-toggle="tooltip" title="flag flag-gn" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gp" data-toggle="tooltip" title="flag flag-gp" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gq" data-toggle="tooltip" title="flag flag-gq" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gr" data-toggle="tooltip" title="flag flag-gr" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gs" data-toggle="tooltip" title="flag flag-gs" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gt" data-toggle="tooltip" title="flag flag-gt" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gu" data-toggle="tooltip" title="flag flag-gu" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gw" data-toggle="tooltip" title="flag flag-gw" /></li>
                                            <li className="icons-list-item"><i className="flag flag-gy" data-toggle="tooltip" title="flag flag-gy" /></li>
                                            <li className="icons-list-item"><i className="flag flag-hk" data-toggle="tooltip" title="flag flag-hk" /></li>
                                            <li className="icons-list-item"><i className="flag flag-hm" data-toggle="tooltip" title="flag flag-hm" /></li>
                                            <li className="icons-list-item"><i className="flag flag-hn" data-toggle="tooltip" title="flag flag-hn" /></li>
                                            <li className="icons-list-item"><i className="flag flag-hr" data-toggle="tooltip" title="flag flag-hr" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ht" data-toggle="tooltip" title="flag flag-ht" /></li>
                                            <li className="icons-list-item"><i className="flag flag-hu" data-toggle="tooltip" title="flag flag-hu" /></li>
                                            <li className="icons-list-item"><i className="flag flag-id" data-toggle="tooltip" title="flag flag-id" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ie" data-toggle="tooltip" title="flag flag-ie" /></li>
                                            <li className="icons-list-item"><i className="flag flag-il" data-toggle="tooltip" title="flag flag-il" /></li>
                                            <li className="icons-list-item"><i className="flag flag-im" data-toggle="tooltip" title="flag flag-im" /></li>
                                            <li className="icons-list-item"><i className="flag flag-in" data-toggle="tooltip" title="flag flag-in" /></li>
                                            <li className="icons-list-item"><i className="flag flag-io" data-toggle="tooltip" title="flag flag-io" /></li>
                                            <li className="icons-list-item"><i className="flag flag-iq" data-toggle="tooltip" title="flag flag-iq" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ir" data-toggle="tooltip" title="flag flag-ir" /></li>
                                            <li className="icons-list-item"><i className="flag flag-is" data-toggle="tooltip" title="flag flag-is" /></li>
                                            <li className="icons-list-item"><i className="flag flag-it" data-toggle="tooltip" title="flag flag-it" /></li>
                                            <li className="icons-list-item"><i className="flag flag-je" data-toggle="tooltip" title="flag flag-je" /></li>
                                            <li className="icons-list-item"><i className="flag flag-jm" data-toggle="tooltip" title="flag flag-jm" /></li>
                                            <li className="icons-list-item"><i className="flag flag-jo" data-toggle="tooltip" title="flag flag-jo" /></li>
                                            <li className="icons-list-item"><i className="flag flag-jp" data-toggle="tooltip" title="flag flag-jp" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ke" data-toggle="tooltip" title="flag flag-ke" /></li>
                                            <li className="icons-list-item"><i className="flag flag-kg" data-toggle="tooltip" title="flag flag-kg" /></li>
                                            <li className="icons-list-item"><i className="flag flag-kh" data-toggle="tooltip" title="flag flag-kh" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ki" data-toggle="tooltip" title="flag flag-ki" /></li>
                                            <li className="icons-list-item"><i className="flag flag-km" data-toggle="tooltip" title="flag flag-km" /></li>
                                            <li className="icons-list-item"><i className="flag flag-kn" data-toggle="tooltip" title="flag flag-kn" /></li>
                                            <li className="icons-list-item"><i className="flag flag-kp" data-toggle="tooltip" title="flag flag-kp" /></li>
                                            <li className="icons-list-item"><i className="flag flag-kr" data-toggle="tooltip" title="flag flag-kr" /></li>
                                            <li className="icons-list-item"><i className="flag flag-kw" data-toggle="tooltip" title="flag flag-kw" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ky" data-toggle="tooltip" title="flag flag-ky" /></li>
                                            <li className="icons-list-item"><i className="flag flag-kz" data-toggle="tooltip" title="flag flag-kz" /></li>
                                            <li className="icons-list-item"><i className="flag flag-la" data-toggle="tooltip" title="flag flag-la" /></li>
                                            <li className="icons-list-item"><i className="flag flag-lb" data-toggle="tooltip" title="flag flag-lb" /></li>
                                            <li className="icons-list-item"><i className="flag flag-lc" data-toggle="tooltip" title="flag flag-lc" /></li>
                                            <li className="icons-list-item"><i className="flag flag-li" data-toggle="tooltip" title="flag flag-li" /></li>
                                            <li className="icons-list-item"><i className="flag flag-lk" data-toggle="tooltip" title="flag flag-lk" /></li>
                                            <li className="icons-list-item"><i className="flag flag-lr" data-toggle="tooltip" title="flag flag-lr" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ls" data-toggle="tooltip" title="flag flag-ls" /></li>
                                            <li className="icons-list-item"><i className="flag flag-lt" data-toggle="tooltip" title="flag flag-lt" /></li>
                                            <li className="icons-list-item"><i className="flag flag-lu" data-toggle="tooltip" title="flag flag-lu" /></li>
                                            <li className="icons-list-item"><i className="flag flag-lv" data-toggle="tooltip" title="flag flag-lv" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ly" data-toggle="tooltip" title="flag flag-ly" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ma" data-toggle="tooltip" title="flag flag-ma" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mc" data-toggle="tooltip" title="flag flag-mc" /></li>
                                            <li className="icons-list-item"><i className="flag flag-md" data-toggle="tooltip" title="flag flag-md" /></li>
                                            <li className="icons-list-item"><i className="flag flag-me" data-toggle="tooltip" title="flag flag-me" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mf" data-toggle="tooltip" title="flag flag-mf" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mg" data-toggle="tooltip" title="flag flag-mg" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mh" data-toggle="tooltip" title="flag flag-mh" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mk" data-toggle="tooltip" title="flag flag-mk" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ml" data-toggle="tooltip" title="flag flag-ml" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mm" data-toggle="tooltip" title="flag flag-mm" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mn" data-toggle="tooltip" title="flag flag-mn" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mo" data-toggle="tooltip" title="flag flag-mo" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mp" data-toggle="tooltip" title="flag flag-mp" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mq" data-toggle="tooltip" title="flag flag-mq" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mr" data-toggle="tooltip" title="flag flag-mr" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ms" data-toggle="tooltip" title="flag flag-ms" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mt" data-toggle="tooltip" title="flag flag-mt" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mu" data-toggle="tooltip" title="flag flag-mu" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mv" data-toggle="tooltip" title="flag flag-mv" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mw" data-toggle="tooltip" title="flag flag-mw" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mx" data-toggle="tooltip" title="flag flag-mx" /></li>
                                            <li className="icons-list-item"><i className="flag flag-my" data-toggle="tooltip" title="flag flag-my" /></li>
                                            <li className="icons-list-item"><i className="flag flag-mz" data-toggle="tooltip" title="flag flag-mz" /></li>
                                            <li className="icons-list-item"><i className="flag flag-na" data-toggle="tooltip" title="flag flag-na" /></li>
                                            <li className="icons-list-item"><i className="flag flag-nc" data-toggle="tooltip" title="flag flag-nc" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ne" data-toggle="tooltip" title="flag flag-ne" /></li>
                                            <li className="icons-list-item"><i className="flag flag-nf" data-toggle="tooltip" title="flag flag-nf" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ng" data-toggle="tooltip" title="flag flag-ng" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ni" data-toggle="tooltip" title="flag flag-ni" /></li>
                                            <li className="icons-list-item"><i className="flag flag-nl" data-toggle="tooltip" title="flag flag-nl" /></li>
                                            <li className="icons-list-item"><i className="flag flag-no" data-toggle="tooltip" title="flag flag-no" /></li>
                                            <li className="icons-list-item"><i className="flag flag-np" data-toggle="tooltip" title="flag flag-np" /></li>
                                            <li className="icons-list-item"><i className="flag flag-nr" data-toggle="tooltip" title="flag flag-nr" /></li>
                                            <li className="icons-list-item"><i className="flag flag-nu" data-toggle="tooltip" title="flag flag-nu" /></li>
                                            <li className="icons-list-item"><i className="flag flag-nz" data-toggle="tooltip" title="flag flag-nz" /></li>
                                            <li className="icons-list-item"><i className="flag flag-om" data-toggle="tooltip" title="flag flag-om" /></li>
                                            <li className="icons-list-item"><i className="flag flag-pa" data-toggle="tooltip" title="flag flag-pa" /></li>
                                            <li className="icons-list-item"><i className="flag flag-pe" data-toggle="tooltip" title="flag flag-pe" /></li>
                                            <li className="icons-list-item"><i className="flag flag-pf" data-toggle="tooltip" title="flag flag-pf" /></li>
                                            <li className="icons-list-item"><i className="flag flag-pg" data-toggle="tooltip" title="flag flag-pg" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ph" data-toggle="tooltip" title="flag flag-ph" /></li>
                                            <li className="icons-list-item"><i className="flag flag-pk" data-toggle="tooltip" title="flag flag-pk" /></li>
                                            <li className="icons-list-item"><i className="flag flag-pl" data-toggle="tooltip" title="flag flag-pl" /></li>
                                            <li className="icons-list-item"><i className="flag flag-pm" data-toggle="tooltip" title="flag flag-pm" /></li>
                                            <li className="icons-list-item"><i className="flag flag-pn" data-toggle="tooltip" title="flag flag-pn" /></li>
                                            <li className="icons-list-item"><i className="flag flag-pr" data-toggle="tooltip" title="flag flag-pr" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ps" data-toggle="tooltip" title="flag flag-ps" /></li>
                                            <li className="icons-list-item"><i className="flag flag-pt" data-toggle="tooltip" title="flag flag-pt" /></li>
                                            <li className="icons-list-item"><i className="flag flag-pw" data-toggle="tooltip" title="flag flag-pw" /></li>
                                            <li className="icons-list-item"><i className="flag flag-py" data-toggle="tooltip" title="flag flag-py" /></li>
                                            <li className="icons-list-item"><i className="flag flag-qa" data-toggle="tooltip" title="flag flag-qa" /></li>
                                            <li className="icons-list-item"><i className="flag flag-re" data-toggle="tooltip" title="flag flag-re" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ro" data-toggle="tooltip" title="flag flag-ro" /></li>
                                            <li className="icons-list-item"><i className="flag flag-rs" data-toggle="tooltip" title="flag flag-rs" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ru" data-toggle="tooltip" title="flag flag-ru" /></li>
                                            <li className="icons-list-item"><i className="flag flag-rw" data-toggle="tooltip" title="flag flag-rw" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sa" data-toggle="tooltip" title="flag flag-sa" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sb" data-toggle="tooltip" title="flag flag-sb" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sc" data-toggle="tooltip" title="flag flag-sc" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sd" data-toggle="tooltip" title="flag flag-sd" /></li>
                                            <li className="icons-list-item"><i className="flag flag-se" data-toggle="tooltip" title="flag flag-se" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sg" data-toggle="tooltip" title="flag flag-sg" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sh" data-toggle="tooltip" title="flag flag-sh" /></li>
                                            <li className="icons-list-item"><i className="flag flag-si" data-toggle="tooltip" title="flag flag-si" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sj" data-toggle="tooltip" title="flag flag-sj" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sk" data-toggle="tooltip" title="flag flag-sk" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sl" data-toggle="tooltip" title="flag flag-sl" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sm" data-toggle="tooltip" title="flag flag-sm" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sn" data-toggle="tooltip" title="flag flag-sn" /></li>
                                            <li className="icons-list-item"><i className="flag flag-so" data-toggle="tooltip" title="flag flag-so" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sr" data-toggle="tooltip" title="flag flag-sr" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ss" data-toggle="tooltip" title="flag flag-ss" /></li>
                                            <li className="icons-list-item"><i className="flag flag-st" data-toggle="tooltip" title="flag flag-st" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sv" data-toggle="tooltip" title="flag flag-sv" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sx" data-toggle="tooltip" title="flag flag-sx" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sy" data-toggle="tooltip" title="flag flag-sy" /></li>
                                            <li className="icons-list-item"><i className="flag flag-sz" data-toggle="tooltip" title="flag flag-sz" /></li>
                                            <li className="icons-list-item"><i className="flag flag-tc" data-toggle="tooltip" title="flag flag-tc" /></li>
                                            <li className="icons-list-item"><i className="flag flag-td" data-toggle="tooltip" title="flag flag-td" /></li>
                                            <li className="icons-list-item"><i className="flag flag-tf" data-toggle="tooltip" title="flag flag-tf" /></li>
                                            <li className="icons-list-item"><i className="flag flag-tg" data-toggle="tooltip" title="flag flag-tg" /></li>
                                            <li className="icons-list-item"><i className="flag flag-th" data-toggle="tooltip" title="flag flag-th" /></li>
                                            <li className="icons-list-item"><i className="flag flag-tj" data-toggle="tooltip" title="flag flag-tj" /></li>
                                            <li className="icons-list-item"><i className="flag flag-tk" data-toggle="tooltip" title="flag flag-tk" /></li>
                                            <li className="icons-list-item"><i className="flag flag-tl" data-toggle="tooltip" title="flag flag-tl" /></li>
                                            <li className="icons-list-item"><i className="flag flag-tm" data-toggle="tooltip" title="flag flag-tm" /></li>
                                            <li className="icons-list-item"><i className="flag flag-tn" data-toggle="tooltip" title="flag flag-tn" /></li>
                                            <li className="icons-list-item"><i className="flag flag-to" data-toggle="tooltip" title="flag flag-to" /></li>
                                            <li className="icons-list-item"><i className="flag flag-tr" data-toggle="tooltip" title="flag flag-tr" /></li>
                                            <li className="icons-list-item"><i className="flag flag-tt" data-toggle="tooltip" title="flag flag-tt" /></li>
                                            <li className="icons-list-item"><i className="flag flag-tv" data-toggle="tooltip" title="flag flag-tv" /></li>
                                            <li className="icons-list-item"><i className="flag flag-tw" data-toggle="tooltip" title="flag flag-tw" /></li>
                                            <li className="icons-list-item"><i className="flag flag-tz" data-toggle="tooltip" title="flag flag-tz" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ua" data-toggle="tooltip" title="flag flag-ua" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ug" data-toggle="tooltip" title="flag flag-ug" /></li>
                                            <li className="icons-list-item"><i className="flag flag-um" data-toggle="tooltip" title="flag flag-um" /></li>
                                            <li className="icons-list-item"><i className="flag flag-un" data-toggle="tooltip" title="flag flag-un" /></li>
                                            <li className="icons-list-item"><i className="flag flag-us" data-toggle="tooltip" title="flag flag-us" /></li>
                                            <li className="icons-list-item"><i className="flag flag-uy" data-toggle="tooltip" title="flag flag-uy" /></li>
                                            <li className="icons-list-item"><i className="flag flag-uz" data-toggle="tooltip" title="flag flag-uz" /></li>
                                            <li className="icons-list-item"><i className="flag flag-va" data-toggle="tooltip" title="flag flag-va" /></li>
                                            <li className="icons-list-item"><i className="flag flag-vc" data-toggle="tooltip" title="flag flag-vc" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ve" data-toggle="tooltip" title="flag flag-ve" /></li>
                                            <li className="icons-list-item"><i className="flag flag-vg" data-toggle="tooltip" title="flag flag-vg" /></li>
                                            <li className="icons-list-item"><i className="flag flag-vi" data-toggle="tooltip" title="flag flag-vi" /></li>
                                            <li className="icons-list-item"><i className="flag flag-vn" data-toggle="tooltip" title="flag flag-vn" /></li>
                                            <li className="icons-list-item"><i className="flag flag-vu" data-toggle="tooltip" title="flag flag-vu" /></li>
                                            <li className="icons-list-item"><i className="flag flag-wf" data-toggle="tooltip" title="flag flag-wf" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ws" data-toggle="tooltip" title="flag flag-ws" /></li>
                                            <li className="icons-list-item"><i className="flag flag-ye" data-toggle="tooltip" title="flag flag-ye" /></li>
                                            <li className="icons-list-item"><i className="flag flag-yt" data-toggle="tooltip" title="flag flag-yt" /></li>
                                            <li className="icons-list-item"><i className="flag flag-za" data-toggle="tooltip" title="flag flag-za" /></li>
                                            <li className="icons-list-item"><i className="flag flag-zm" data-toggle="tooltip" title="flag flag-zm" /></li>
                                            <li className="icons-list-item"><i className="flag flag-zw" data-toggle="tooltip" title="flag flag-zw" /></li>
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
                                            <li />
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
export default connect(mapStateToProps, mapDispatchToProps)(IconsFlags);