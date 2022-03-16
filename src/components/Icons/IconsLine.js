import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class IconsLine extends Component {
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
                                        <NavLink to="/icons-line" className="dropdown-item active">Line Icons</NavLink>
                                        <NavLink to="/icons-flag" className="dropdown-item">Flags Icons</NavLink>
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
                                            <li className="icons-list-item"><i className="icon-user" /></li>
                                            <li className="icons-list-item"><i className="icon-user-female" /></li>
                                            <li className="icons-list-item"><i className="icon-users" /></li>
                                            <li className="icons-list-item"><i className="icon-user-follow" /></li>
                                            <li className="icons-list-item"><i className="icon-user-following" /></li>
                                            <li className="icons-list-item"><i className="icon-user-unfollow" /></li>
                                            <li className="icons-list-item"><i className="icon-trophy" /></li>
                                            <li className="icons-list-item"><i className="icon-speedometer" /></li>
                                            <li className="icons-list-item"><i className="icon-social-youtube" /></li>
                                            <li className="icons-list-item"><i className="icon-social-twitter" /></li>
                                            <li className="icons-list-item"><i className="icon-social-tumblr" /></li>
                                            <li className="icons-list-item"><i className="icon-social-facebook" /></li>
                                            <li className="icons-list-item"><i className="icon-social-dropbox" /></li>
                                            <li className="icons-list-item"><i className="icon-social-dribbble" /></li>
                                            <li className="icons-list-item"><i className="icon-shield" /></li>
                                            <li className="icons-list-item"><i className="icon-screen-tablet" /></li>
                                            <li className="icons-list-item"><i className="icon-screen-smartphone" /></li>
                                            <li className="icons-list-item"><i className="icon-screen-desktop" /></li>
                                            <li className="icons-list-item"><i className="icon-plane" /></li>
                                            <li className="icons-list-item"><i className="icon-notebook" /></li>
                                            <li className="icons-list-item"><i className="icon-moustache" /></li>
                                            <li className="icons-list-item"><i className="icon-mouse" /></li>
                                            <li className="icons-list-item"><i className="icon-magnet" /></li>
                                            <li className="icons-list-item"><i className="icon-magic-wand" /></li>
                                            <li className="icons-list-item"><i className="icon-hourglass" /></li>
                                            <li className="icons-list-item"><i className="icon-graduation" /></li>
                                            <li className="icons-list-item"><i className="icon-ghost" /></li>
                                            <li className="icons-list-item"><i className="icon-game-controller" /></li>
                                            <li className="icons-list-item"><i className="icon-fire" /></li>
                                            <li className="icons-list-item"><i className="icon-eyeglasses" /></li>
                                            <li className="icons-list-item"><i className="icon-envelope-open" /></li>
                                            <li className="icons-list-item"><i className="icon-envelope-letter" /></li>
                                            <li className="icons-list-item"><i className="icon-energy" /></li>
                                            <li className="icons-list-item"><i className="icon-emoticon-smile" /></li>
                                            <li className="icons-list-item"><i className="icon-disc" /></li>
                                            <li className="icons-list-item"><i className="icon-cursor-move" /></li>
                                            <li className="icons-list-item"><i className="icon-crop" /></li>
                                            <li className="icons-list-item"><i className="icon-credit-card" /></li>
                                            <li className="icons-list-item"><i className="icon-chemistry" /></li>
                                            <li className="icons-list-item"><i className="icon-bell" /></li>
                                            <li className="icons-list-item"><i className="icon-badge" /></li>
                                            <li className="icons-list-item"><i className="icon-anchor" /></li>
                                            <li className="icons-list-item"><i className="icon-action-redo" /></li>
                                            <li className="icons-list-item"><i className="icon-action-undo" /></li>
                                            <li className="icons-list-item"><i className="icon-bag" /></li>
                                            <li className="icons-list-item"><i className="icon-basket" /></li>
                                            <li className="icons-list-item"><i className="icon-basket-loaded" /></li>
                                            <li className="icons-list-item"><i className="icon-book-open" /></li>
                                            <li className="icons-list-item"><i className="icon-briefcase" /></li>
                                            <li className="icons-list-item"><i className="icon-bubbles" /></li>
                                            <li className="icons-list-item"><i className="icon-calculator" /></li>
                                            <li className="icons-list-item"><i className="icon-call-end" /></li>
                                            <li className="icons-list-item"><i className="icon-call-in" /></li>
                                            <li className="icons-list-item"><i className="icon-call-out" /></li>
                                            <li className="icons-list-item"><i className="icon-compass" /></li>
                                            <li className="icons-list-item"><i className="icon-cup" /></li>
                                            <li className="icons-list-item"><i className="icon-diamond" /></li>
                                            <li className="icons-list-item"><i className="icon-direction" /></li>
                                            <li className="icons-list-item"><i className="icon-directions" /></li>
                                            <li className="icons-list-item"><i className="icon-docs" /></li>
                                            <li className="icons-list-item"><i className="icon-drawer" /></li>
                                            <li className="icons-list-item"><i className="icon-drop" /></li>
                                            <li className="icons-list-item"><i className="icon-earphones" /></li>
                                            <li className="icons-list-item"><i className="icon-earphones-alt" /> </li>
                                            <li className="icons-list-item"><i className="icon-feed" /></li>
                                            <li className="icons-list-item"><i className="icon-film" /></li>
                                            <li className="icons-list-item"><i className="icon-folder-alt" /></li>
                                            <li className="icons-list-item"><i className="icon-frame" /></li>
                                            <li className="icons-list-item"><i className="icon-globe" /></li>
                                            <li className="icons-list-item"><i className="icon-globe-alt" /></li>
                                            <li className="icons-list-item"><i className="icon-handbag" /></li>
                                            <li className="icons-list-item"><i className="icon-layers" /></li>
                                            <li className="icons-list-item"><i className="icon-map" /></li>
                                            <li className="icons-list-item"><i className="icon-picture" /></li>
                                            <li className="icons-list-item"><i className="icon-pin" /></li>
                                            <li className="icons-list-item"><i className="icon-playlist" /></li>
                                            <li className="icons-list-item"><i className="icon-present" /></li>
                                            <li className="icons-list-item"><i className="icon-printer" /></li>
                                            <li className="icons-list-item"><i className="icon-puzzle" /></li>
                                            <li className="icons-list-item"><i className="icon-speech" /></li>
                                            <li className="icons-list-item"><i className="icon-vector" /></li>
                                            <li className="icons-list-item"><i className="icon-wallet" /></li>
                                            <li className="icons-list-item"><i className="icon-arrow-down" /></li>
                                            <li className="icons-list-item"><i className="icon-arrow-left" /></li>
                                            <li className="icons-list-item"><i className="icon-arrow-right" /></li>
                                            <li className="icons-list-item"><i className="icon-arrow-up" /></li>
                                            <li className="icons-list-item"><i className="icon-bar-chart" /></li>
                                            <li className="icons-list-item"><i className="icon-bulb" /></li>
                                            <li className="icons-list-item"><i className="icon-calendar" /></li>
                                            <li className="icons-list-item"><i className="icon-control-end" /></li>
                                            <li className="icons-list-item"><i className="icon-control-forward" /></li>
                                            <li className="icons-list-item"><i className="icon-control-pause" /></li>
                                            <li className="icons-list-item"><i className="icon-control-play" /></li>
                                            <li className="icons-list-item"><i className="icon-control-rewind" /></li>
                                            <li className="icons-list-item"><i className="icon-control-start" /></li>
                                            <li className="icons-list-item"><i className="icon-cursor" /></li>
                                            <li className="icons-list-item"><i className="icon-dislike" /></li>
                                            <li className="icons-list-item"><i className="icon-equalizer" /></li>
                                            <li className="icons-list-item"><i className="icon-graph" /></li>
                                            <li className="icons-list-item"><i className="icon-grid" /></li>
                                            <li className="icons-list-item"><i className="icon-home" /></li>
                                            <li className="icons-list-item"><i className="icon-like" /></li>
                                            <li className="icons-list-item"><i className="icon-list" /></li>
                                            <li className="icons-list-item"><i className="icon-login" /></li>
                                            <li className="icons-list-item"><i className="icon-logout" /></li>
                                            <li className="icons-list-item"><i className="icon-loop" /></li>
                                            <li className="icons-list-item"><i className="icon-microphone" /></li>
                                            <li className="icons-list-item"><i className="icon-music-tone" /></li>
                                            <li className="icons-list-item"><i className="icon-music-tone-alt" /></li>
                                            <li className="icons-list-item"><i className="icon-note" /></li>
                                            <li className="icons-list-item"><i className="icon-pencil" /></li>
                                            <li className="icons-list-item"><i className="icon-pie-chart" /></li>
                                            <li className="icons-list-item"><i className="icon-question" /></li>
                                            <li className="icons-list-item"><i className="icon-rocket" /></li>
                                            <li className="icons-list-item"><i className="icon-share" /></li>
                                            <li className="icons-list-item"><i className="icon-share-alt" /></li>
                                            <li className="icons-list-item"><i className="icon-shuffle" /></li>
                                            <li className="icons-list-item"><i className="icon-size-actual" /></li>
                                            <li className="icons-list-item"><i className="icon-size-fullscreen" /></li>
                                            <li className="icons-list-item"><i className="icon-support" /></li>
                                            <li className="icons-list-item"><i className="icon-tag" /></li>
                                            <li className="icons-list-item"><i className="icon-trash" /></li>
                                            <li className="icons-list-item"><i className="icon-umbrella" /></li>
                                            <li className="icons-list-item"><i className="icon-wrench" /></li>
                                            <li className="icons-list-item"><i className="icon-ban" /></li>
                                            <li className="icons-list-item"><i className="icon-bubble" /></li>
                                            <li className="icons-list-item"><i className="icon-camcorder" /></li>
                                            <li className="icons-list-item"><i className="icon-camera" /></li>
                                            <li className="icons-list-item"><i className="icon-check" /></li>
                                            <li className="icons-list-item"><i className="icon-clock" /></li>
                                            <li className="icons-list-item"><i className="icon-close" /></li>
                                            <li className="icons-list-item"><i className="icon-cloud-download" /></li>
                                            <li className="icons-list-item"><i className="icon-cloud-upload" /></li>
                                            <li className="icons-list-item"><i className="icon-doc" /></li>
                                            <li className="icons-list-item"><i className="icon-envelope" /> </li>
                                            <li className="icons-list-item"><i className="icon-eye" /></li>
                                            <li className="icons-list-item"><i className="icon-flag" /></li>
                                            <li className="icons-list-item"><i className="icon-folder" /></li>
                                            <li className="icons-list-item"><i className="icon-heart" /></li>
                                            <li className="icons-list-item"><i className="icon-info" /></li>
                                            <li className="icons-list-item"><i className="icon-key" /></li>
                                            <li className="icons-list-item"><i className="icon-link" /></li>
                                            <li className="icons-list-item"><i className="icon-lock" /></li>
                                            <li className="icons-list-item"><i className="icon-lock-open" /></li>
                                            <li className="icons-list-item"><i className="icon-magnifier" /></li>
                                            <li className="icons-list-item"><i className="icon-magnifier-add" /></li>
                                            <li className="icons-list-item"><i className="icon-magnifier-remove" /></li>
                                            <li className="icons-list-item"><i className="icon-paper-clip" /></li>
                                            <li className="icons-list-item"><i className="icon-paper-plane" /></li>
                                            <li className="icons-list-item"><i className="icon-plus" /></li>
                                            <li className="icons-list-item"><i className="icon-pointer" /></li>
                                            <li className="icons-list-item"><i className="icon-power" /></li>
                                            <li className="icons-list-item"><i className="icon-refresh" /></li>
                                            <li className="icons-list-item"><i className="icon-reload" /></li>
                                            <li className="icons-list-item"><i className="icon-settings" /></li>
                                            <li className="icons-list-item"><i className="icon-star" /></li>
                                            <li className="icons-list-item"><i className="icon-symbol-female" /></li>
                                            <li className="icons-list-item"><i className="icon-symbol-male" /></li>
                                            <li className="icons-list-item"><i className="icon-target" /></li>
                                            <li className="icons-list-item"><i className="icon-volume-1" /></li>
                                            <li className="icons-list-item"><i className="icon-volume-2" /></li>
                                            <li className="icons-list-item"><i className="icon-volume-off" /></li>
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
export default connect(mapStateToProps, mapDispatchToProps)(IconsLine);