import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

class IconsFeather extends Component {
    render() {
        const { fixNavbar } = this.props;
        return (
            <>
                <div className={`section-body ${fixNavbar ? "marginTop" : ""} `}>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between align-items-center">
                            <ul className="nav nav-tabs page-header-tab">
                                <li className="nav-item"><NavLink to="/icons" className="nav-link" >Fontawesome</NavLink></li>
                                <li className="nav-item"><NavLink to="/icons-feather" className="nav-link active" >Feather</NavLink></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
                                    <div className="dropdown-menu">
                                        <NavLink to="/icons-line" className="dropdown-item">Line Icons</NavLink>
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
                                            <li className="icons-list-item"><i className="fe fe-activity" data-toggle="tooltip" title="fe fe-activity" /></li>
                                            <li className="icons-list-item"><i className="fe fe-airplay" data-toggle="tooltip" title="fe fe-airplay" /></li>
                                            <li className="icons-list-item"><i className="fe fe-alert-circle" data-toggle="tooltip" title="fe fe-alert-circle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-alert-octagon" data-toggle="tooltip" title="fe fe-alert-octagon" /></li>
                                            <li className="icons-list-item"><i className="fe fe-alert-triangle" data-toggle="tooltip" title="fe fe-alert-triangle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-align-center" data-toggle="tooltip" title="fe fe-align-center" /></li>
                                            <li className="icons-list-item"><i className="fe fe-align-justify" data-toggle="tooltip" title="fe fe-align-justify" /></li>
                                            <li className="icons-list-item"><i className="fe fe-align-left" data-toggle="tooltip" title="fe fe-align-left" /></li>
                                            <li className="icons-list-item"><i className="fe fe-align-right" data-toggle="tooltip" title="fe fe-align-right" /></li>
                                            <li className="icons-list-item"><i className="fe fe-anchor" data-toggle="tooltip" title="fe fe-anchor" /></li>
                                            <li className="icons-list-item"><i className="fe fe-aperture" data-toggle="tooltip" title="fe fe-aperture" /></li>
                                            <li className="icons-list-item"><i className="fe fe-arrow-down" data-toggle="tooltip" title="fe fe-arrow-down" /></li>
                                            <li className="icons-list-item"><i className="fe fe-arrow-down-circle" data-toggle="tooltip" title="fe fe-arrow-down-circle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-arrow-down-left" data-toggle="tooltip" title="fe fe-arrow-down-left" /></li>
                                            <li className="icons-list-item"><i className="fe fe-arrow-down-right" data-toggle="tooltip" title="fe fe-arrow-down-right" /></li>
                                            <li className="icons-list-item"><i className="fe fe-arrow-left" data-toggle="tooltip" title="fe fe-arrow-left" /></li>
                                            <li className="icons-list-item"><i className="fe fe-arrow-left-circle" data-toggle="tooltip" title="fe fe-arrow-left-circle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-arrow-right" data-toggle="tooltip" title="fe fe-arrow-right" /></li>
                                            <li className="icons-list-item"><i className="fe fe-arrow-right-circle" data-toggle="tooltip" title="fe fe-arrow-right-circle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-arrow-up" data-toggle="tooltip" title="fe fe-arrow-up" /></li>
                                            <li className="icons-list-item"><i className="fe fe-arrow-up-circle" data-toggle="tooltip" title="fe fe-arrow-up-circle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-arrow-up-left" data-toggle="tooltip" title="fe fe-arrow-up-left" /></li>
                                            <li className="icons-list-item"><i className="fe fe-arrow-up-right" data-toggle="tooltip" title="fe fe-arrow-up-right" /></li>
                                            <li className="icons-list-item"><i className="fe fe-at-sign" data-toggle="tooltip" title="fe fe-at-sign" /></li>
                                            <li className="icons-list-item"><i className="fe fe-award" data-toggle="tooltip" title="fe fe-award" /></li>
                                            <li className="icons-list-item"><i className="fe fe-bar-chart" data-toggle="tooltip" title="fe fe-bar-chart" /></li>
                                            <li className="icons-list-item"><i className="fe fe-bar-chart-2" data-toggle="tooltip" title="fe fe-bar-chart-2" /></li>
                                            <li className="icons-list-item"><i className="fe fe-battery" data-toggle="tooltip" title="fe fe-battery" /></li>
                                            <li className="icons-list-item"><i className="fe fe-battery-charging" data-toggle="tooltip" title="fe fe-battery-charging" /></li>
                                            <li className="icons-list-item"><i className="fe fe-bell" data-toggle="tooltip" title="fe fe-bell" /></li>
                                            <li className="icons-list-item"><i className="fe fe-bell-off" data-toggle="tooltip" title="fe fe-bell-off" /></li>
                                            <li className="icons-list-item"><i className="fe fe-bluetooth" data-toggle="tooltip" title="fe fe-bluetooth" /></li>
                                            <li className="icons-list-item"><i className="fe fe-bold" data-toggle="tooltip" title="fe fe-bold" /></li>
                                            <li className="icons-list-item"><i className="fe fe-book" data-toggle="tooltip" title="fe fe-book" /></li>
                                            <li className="icons-list-item"><i className="fe fe-book-open" data-toggle="tooltip" title="fe fe-book-open" /></li>
                                            <li className="icons-list-item"><i className="fe fe-bookmark" data-toggle="tooltip" title="fe fe-bookmark" /></li>
                                            <li className="icons-list-item"><i className="fe fe-box" data-toggle="tooltip" title="fe fe-box" /></li>
                                            <li className="icons-list-item"><i className="fe fe-briefcase" data-toggle="tooltip" title="fe fe-briefcase" /></li>
                                            <li className="icons-list-item"><i className="fe fe-calendar" data-toggle="tooltip" title="fe fe-calendar" /></li>
                                            <li className="icons-list-item"><i className="fe fe-camera" data-toggle="tooltip" title="fe fe-camera" /></li>
                                            <li className="icons-list-item"><i className="fe fe-camera-off" data-toggle="tooltip" title="fe fe-camera-off" /></li>
                                            <li className="icons-list-item"><i className="fe fe-cast" data-toggle="tooltip" title="fe fe-cast" /></li>
                                            <li className="icons-list-item"><i className="fe fe-check" data-toggle="tooltip" title="fe fe-check" /></li>
                                            <li className="icons-list-item"><i className="fe fe-check-circle" data-toggle="tooltip" title="fe fe-check-circle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-check-square" data-toggle="tooltip" title="fe fe-check-square" /></li>
                                            <li className="icons-list-item"><i className="fe fe-chevron-down" data-toggle="tooltip" title="fe fe-chevron-down" /></li>
                                            <li className="icons-list-item"><i className="fe fe-chevron-left" data-toggle="tooltip" title="fe fe-chevron-left" /></li>
                                            <li className="icons-list-item"><i className="fe fe-chevron-right" data-toggle="tooltip" title="fe fe-chevron-right" /></li>
                                            <li className="icons-list-item"><i className="fe fe-chevron-up" data-toggle="tooltip" title="fe fe-chevron-up" /></li>
                                            <li className="icons-list-item"><i className="fe fe-chevrons-down" data-toggle="tooltip" title="fe fe-chevrons-down" /></li>
                                            <li className="icons-list-item"><i className="fe fe-chevrons-left" data-toggle="tooltip" title="fe fe-chevrons-left" /></li>
                                            <li className="icons-list-item"><i className="fe fe-chevrons-right" data-toggle="tooltip" title="fe fe-chevrons-right" /></li>
                                            <li className="icons-list-item"><i className="fe fe-chevrons-up" data-toggle="tooltip" title="fe fe-chevrons-up" /></li>
                                            <li className="icons-list-item"><i className="fe fe-chrome" data-toggle="tooltip" title="fe fe-chrome" /></li>
                                            <li className="icons-list-item"><i className="fe fe-circle" data-toggle="tooltip" title="fe fe-circle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-clipboard" data-toggle="tooltip" title="fe fe-clipboard" /></li>
                                            <li className="icons-list-item"><i className="fe fe-clock" data-toggle="tooltip" title="fe fe-clock" /></li>
                                            <li className="icons-list-item"><i className="fe fe-cloud" data-toggle="tooltip" title="fe fe-cloud" /></li>
                                            <li className="icons-list-item"><i className="fe fe-cloud-drizzle" data-toggle="tooltip" title="fe fe-cloud-drizzle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-cloud-lightning" data-toggle="tooltip" title="fe fe-cloud-lightning" /></li>
                                            <li className="icons-list-item"><i className="fe fe-cloud-off" data-toggle="tooltip" title="fe fe-cloud-off" /></li>
                                            <li className="icons-list-item"><i className="fe fe-cloud-rain" data-toggle="tooltip" title="fe fe-cloud-rain" /></li>
                                            <li className="icons-list-item"><i className="fe fe-cloud-snow" data-toggle="tooltip" title="fe fe-cloud-snow" /></li>
                                            <li className="icons-list-item"><i className="fe fe-code" data-toggle="tooltip" title="fe fe-code" /></li>
                                            <li className="icons-list-item"><i className="fe fe-codepen" data-toggle="tooltip" title="fe fe-codepen" /></li>
                                            <li className="icons-list-item"><i className="fe fe-command" data-toggle="tooltip" title="fe fe-command" /></li>
                                            <li className="icons-list-item"><i className="fe fe-compass" data-toggle="tooltip" title="fe fe-compass" /></li>
                                            <li className="icons-list-item"><i className="fe fe-copy" data-toggle="tooltip" title="fe fe-copy" /></li>
                                            <li className="icons-list-item"><i className="fe fe-corner-down-left" data-toggle="tooltip" title="fe fe-corner-down-left" /></li>
                                            <li className="icons-list-item"><i className="fe fe-corner-down-right" data-toggle="tooltip" title="fe fe-corner-down-right" /></li>
                                            <li className="icons-list-item"><i className="fe fe-corner-left-down" data-toggle="tooltip" title="fe fe-corner-left-down" /></li>
                                            <li className="icons-list-item"><i className="fe fe-corner-left-up" data-toggle="tooltip" title="fe fe-corner-left-up" /></li>
                                            <li className="icons-list-item"><i className="fe fe-corner-right-down" data-toggle="tooltip" title="fe fe-corner-right-down" /></li>
                                            <li className="icons-list-item"><i className="fe fe-corner-right-up" data-toggle="tooltip" title="fe fe-corner-right-up" /></li>
                                            <li className="icons-list-item"><i className="fe fe-corner-up-left" data-toggle="tooltip" title="fe fe-corner-up-left" /></li>
                                            <li className="icons-list-item"><i className="fe fe-corner-up-right" data-toggle="tooltip" title="fe fe-corner-up-right" /></li>
                                            <li className="icons-list-item"><i className="fe fe-cpu" data-toggle="tooltip" title="fe fe-cpu" /></li>
                                            <li className="icons-list-item"><i className="fe fe-credit-card" data-toggle="tooltip" title="fe fe-credit-card" /></li>
                                            <li className="icons-list-item"><i className="fe fe-crop" data-toggle="tooltip" title="fe fe-crop" /></li>
                                            <li className="icons-list-item"><i className="fe fe-crosshair" data-toggle="tooltip" title="fe fe-crosshair" /></li>
                                            <li className="icons-list-item"><i className="fe fe-database" data-toggle="tooltip" title="fe fe-database" /></li>
                                            <li className="icons-list-item"><i className="fe fe-delete" data-toggle="tooltip" title="fe fe-delete" /></li>
                                            <li className="icons-list-item"><i className="fe fe-disc" data-toggle="tooltip" title="fe fe-disc" /></li>
                                            <li className="icons-list-item"><i className="fe fe-dollar-sign" data-toggle="tooltip" title="fe fe-dollar-sign" /></li>
                                            <li className="icons-list-item"><i className="fe fe-download" data-toggle="tooltip" title="fe fe-download" /></li>
                                            <li className="icons-list-item"><i className="fe fe-download-cloud" data-toggle="tooltip" title="fe fe-download-cloud" /></li>
                                            <li className="icons-list-item"><i className="fe fe-droplet" data-toggle="tooltip" title="fe fe-droplet" /></li>
                                            <li className="icons-list-item"><i className="fe fe-edit" data-toggle="tooltip" title="fe fe-edit" /></li>
                                            <li className="icons-list-item"><i className="fe fe-edit-2" data-toggle="tooltip" title="fe fe-edit-2" /></li>
                                            <li className="icons-list-item"><i className="fe fe-edit-3" data-toggle="tooltip" title="fe fe-edit-3" /></li>
                                            <li className="icons-list-item"><i className="fe fe-external-link" data-toggle="tooltip" title="fe fe-external-link" /></li>
                                            <li className="icons-list-item"><i className="fe fe-eye" data-toggle="tooltip" title="fe fe-eye" /></li>
                                            <li className="icons-list-item"><i className="fe fe-eye-off" data-toggle="tooltip" title="fe fe-eye-off" /></li>
                                            <li className="icons-list-item"><i className="fe fe-facebook" data-toggle="tooltip" title="fe fe-facebook" /></li>
                                            <li className="icons-list-item"><i className="fe fe-fast-forward" data-toggle="tooltip" title="fe fe-fast-forward" /></li>
                                            <li className="icons-list-item"><i className="fe fe-feather" data-toggle="tooltip" title="fe fe-feather" /></li>
                                            <li className="icons-list-item"><i className="fe fe-file" data-toggle="tooltip" title="fe fe-file" /></li>
                                            <li className="icons-list-item"><i className="fe fe-file-minus" data-toggle="tooltip" title="fe fe-file-minus" /></li>
                                            <li className="icons-list-item"><i className="fe fe-file-plus" data-toggle="tooltip" title="fe fe-file-plus" /></li>
                                            <li className="icons-list-item"><i className="fe fe-file-text" data-toggle="tooltip" title="fe fe-file-text" /></li>
                                            <li className="icons-list-item"><i className="fe fe-film" data-toggle="tooltip" title="fe fe-film" /></li>
                                            <li className="icons-list-item"><i className="fe fe-filter" data-toggle="tooltip" title="fe fe-filter" /></li>
                                            <li className="icons-list-item"><i className="fe fe-flag" data-toggle="tooltip" title="fe fe-flag" /></li>
                                            <li className="icons-list-item"><i className="fe fe-folder" data-toggle="tooltip" title="fe fe-folder" /></li>
                                            <li className="icons-list-item"><i className="fe fe-folder-minus" data-toggle="tooltip" title="fe fe-folder-minus" /></li>
                                            <li className="icons-list-item"><i className="fe fe-folder-plus" data-toggle="tooltip" title="fe fe-folder-plus" /></li>
                                            <li className="icons-list-item"><i className="fe fe-git-branch" data-toggle="tooltip" title="fe fe-git-branch" /></li>
                                            <li className="icons-list-item"><i className="fe fe-git-commit" data-toggle="tooltip" title="fe fe-git-commit" /></li>
                                            <li className="icons-list-item"><i className="fe fe-git-merge" data-toggle="tooltip" title="fe fe-git-merge" /></li>
                                            <li className="icons-list-item"><i className="fe fe-git-pull-request" data-toggle="tooltip" title="fe fe-git-pull-request" /></li>
                                            <li className="icons-list-item"><i className="fe fe-github" data-toggle="tooltip" title="fe fe-github" /></li>
                                            <li className="icons-list-item"><i className="fe fe-gitlab" data-toggle="tooltip" title="fe fe-gitlab" /></li>
                                            <li className="icons-list-item"><i className="fe fe-globe" data-toggle="tooltip" title="fe fe-globe" /></li>
                                            <li className="icons-list-item"><i className="fe fe-grid" data-toggle="tooltip" title="fe fe-grid" /></li>
                                            <li className="icons-list-item"><i className="fe fe-hard-drive" data-toggle="tooltip" title="fe fe-hard-drive" /></li>
                                            <li className="icons-list-item"><i className="fe fe-hash" data-toggle="tooltip" title="fe fe-hash" /></li>
                                            <li className="icons-list-item"><i className="fe fe-headphones" data-toggle="tooltip" title="fe fe-headphones" /></li>
                                            <li className="icons-list-item"><i className="fe fe-heart" data-toggle="tooltip" title="fe fe-heart" /></li>
                                            <li className="icons-list-item"><i className="fe fe-help-circle" data-toggle="tooltip" title="fe fe-help-circle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-home" data-toggle="tooltip" title="fe fe-home" /></li>
                                            <li className="icons-list-item"><i className="fe fe-image" data-toggle="tooltip" title="fe fe-image" /></li>
                                            <li className="icons-list-item"><i className="fe fe-inbox" data-toggle="tooltip" title="fe fe-inbox" /></li>
                                            <li className="icons-list-item"><i className="fe fe-info" data-toggle="tooltip" title="fe fe-info" /></li>
                                            <li className="icons-list-item"><i className="fe fe-instagram" data-toggle="tooltip" title="fe fe-instagram" /></li>
                                            <li className="icons-list-item"><i className="fe fe-italic" data-toggle="tooltip" title="fe fe-italic" /></li>
                                            <li className="icons-list-item"><i className="fe fe-layers" data-toggle="tooltip" title="fe fe-layers" /></li>
                                            <li className="icons-list-item"><i className="fe fe-layout" data-toggle="tooltip" title="fe fe-layout" /></li>
                                            <li className="icons-list-item"><i className="fe fe-life-buoy" data-toggle="tooltip" title="fe fe-life-buoy" /></li>
                                            <li className="icons-list-item"><i className="fe fe-link" data-toggle="tooltip" title="fe fe-link" /></li>
                                            <li className="icons-list-item"><i className="fe fe-link-2" data-toggle="tooltip" title="fe fe-link-2" /></li>
                                            <li className="icons-list-item"><i className="fe fe-linkedin" data-toggle="tooltip" title="fe fe-linkedin" /></li>
                                            <li className="icons-list-item"><i className="fe fe-list" data-toggle="tooltip" title="fe fe-list" /></li>
                                            <li className="icons-list-item"><i className="fe fe-loader" data-toggle="tooltip" title="fe fe-loader" /></li>
                                            <li className="icons-list-item"><i className="fe fe-lock" data-toggle="tooltip" title="fe fe-lock" /></li>
                                            <li className="icons-list-item"><i className="fe fe-log-in" data-toggle="tooltip" title="fe fe-log-in" /></li>
                                            <li className="icons-list-item"><i className="fe fe-log-out" data-toggle="tooltip" title="fe fe-log-out" /></li>
                                            <li className="icons-list-item"><i className="fe fe-mail" data-toggle="tooltip" title="fe fe-mail" /></li>
                                            <li className="icons-list-item"><i className="fe fe-map" data-toggle="tooltip" title="fe fe-map" /></li>
                                            <li className="icons-list-item"><i className="fe fe-map-pin" data-toggle="tooltip" title="fe fe-map-pin" /></li>
                                            <li className="icons-list-item"><i className="fe fe-maximize" data-toggle="tooltip" title="fe fe-maximize" /></li>
                                            <li className="icons-list-item"><i className="fe fe-maximize-2" data-toggle="tooltip" title="fe fe-maximize-2" /></li>
                                            <li className="icons-list-item"><i className="fe fe-menu" data-toggle="tooltip" title="fe fe-menu" /></li>
                                            <li className="icons-list-item"><i className="fe fe-message-circle" data-toggle="tooltip" title="fe fe-message-circle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-message-square" data-toggle="tooltip" title="fe fe-message-square" /></li>
                                            <li className="icons-list-item"><i className="fe fe-mic" data-toggle="tooltip" title="fe fe-mic" /></li>
                                            <li className="icons-list-item"><i className="fe fe-mic-off" data-toggle="tooltip" title="fe fe-mic-off" /></li>
                                            <li className="icons-list-item"><i className="fe fe-minimize" data-toggle="tooltip" title="fe fe-minimize" /></li>
                                            <li className="icons-list-item"><i className="fe fe-minimize-2" data-toggle="tooltip" title="fe fe-minimize-2" /></li>
                                            <li className="icons-list-item"><i className="fe fe-minus" data-toggle="tooltip" title="fe fe-minus" /></li>
                                            <li className="icons-list-item"><i className="fe fe-minus-circle" data-toggle="tooltip" title="fe fe-minus-circle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-minus-square" data-toggle="tooltip" title="fe fe-minus-square" /></li>
                                            <li className="icons-list-item"><i className="fe fe-monitor" data-toggle="tooltip" title="fe fe-monitor" /></li>
                                            <li className="icons-list-item"><i className="fe fe-moon" data-toggle="tooltip" title="fe fe-moon" /></li>
                                            <li className="icons-list-item"><i className="fe fe-more-horizontal" data-toggle="tooltip" title="fe fe-more-horizontal" /></li>
                                            <li className="icons-list-item"><i className="fe fe-more-vertical" data-toggle="tooltip" title="fe fe-more-vertical" /></li>
                                            <li className="icons-list-item"><i className="fe fe-move" data-toggle="tooltip" title="fe fe-move" /></li>
                                            <li className="icons-list-item"><i className="fe fe-music" data-toggle="tooltip" title="fe fe-music" /></li>
                                            <li className="icons-list-item"><i className="fe fe-navigation" data-toggle="tooltip" title="fe fe-navigation" /></li>
                                            <li className="icons-list-item"><i className="fe fe-navigation-2" data-toggle="tooltip" title="fe fe-navigation-2" /></li>
                                            <li className="icons-list-item"><i className="fe fe-octagon" data-toggle="tooltip" title="fe fe-octagon" /></li>
                                            <li className="icons-list-item"><i className="fe fe-package" data-toggle="tooltip" title="fe fe-package" /></li>
                                            <li className="icons-list-item"><i className="fe fe-paperclip" data-toggle="tooltip" title="fe fe-paperclip" /></li>
                                            <li className="icons-list-item"><i className="fe fe-pause" data-toggle="tooltip" title="fe fe-pause" /></li>
                                            <li className="icons-list-item"><i className="fe fe-pause-circle" data-toggle="tooltip" title="fe fe-pause-circle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-percent" data-toggle="tooltip" title="fe fe-percent" /></li>
                                            <li className="icons-list-item"><i className="fe fe-phone" data-toggle="tooltip" title="fe fe-phone" /></li>
                                            <li className="icons-list-item"><i className="fe fe-phone-call" data-toggle="tooltip" title="fe fe-phone-call" /></li>
                                            <li className="icons-list-item"><i className="fe fe-phone-forwarded" data-toggle="tooltip" title="fe fe-phone-forwarded" /></li>
                                            <li className="icons-list-item"><i className="fe fe-phone-incoming" data-toggle="tooltip" title="fe fe-phone-incoming" /></li>
                                            <li className="icons-list-item"><i className="fe fe-phone-missed" data-toggle="tooltip" title="fe fe-phone-missed" /></li>
                                            <li className="icons-list-item"><i className="fe fe-phone-off" data-toggle="tooltip" title="fe fe-phone-off" /></li>
                                            <li className="icons-list-item"><i className="fe fe-phone-outgoing" data-toggle="tooltip" title="fe fe-phone-outgoing" /></li>
                                            <li className="icons-list-item"><i className="fe fe-pie-chart" data-toggle="tooltip" title="fe fe-pie-chart" /></li>
                                            <li className="icons-list-item"><i className="fe fe-play" data-toggle="tooltip" title="fe fe-play" /></li>
                                            <li className="icons-list-item"><i className="fe fe-play-circle" data-toggle="tooltip" title="fe fe-play-circle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-plus" data-toggle="tooltip" title="fe fe-plus" /></li>
                                            <li className="icons-list-item"><i className="fe fe-plus-circle" data-toggle="tooltip" title="fe fe-plus-circle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-plus-square" data-toggle="tooltip" title="fe fe-plus-square" /></li>
                                            <li className="icons-list-item"><i className="fe fe-pocket" data-toggle="tooltip" title="fe fe-pocket" /></li>
                                            <li className="icons-list-item"><i className="fe fe-power" data-toggle="tooltip" title="fe fe-power" /></li>
                                            <li className="icons-list-item"><i className="fe fe-printer" data-toggle="tooltip" title="fe fe-printer" /></li>
                                            <li className="icons-list-item"><i className="fe fe-radio" data-toggle="tooltip" title="fe fe-radio" /></li>
                                            <li className="icons-list-item"><i className="fe fe-refresh-ccw" data-toggle="tooltip" title="fe fe-refresh-ccw" /></li>
                                            <li className="icons-list-item"><i className="fe fe-refresh-cw" data-toggle="tooltip" title="fe fe-refresh-cw" /></li>
                                            <li className="icons-list-item"><i className="fe fe-repeat" data-toggle="tooltip" title="fe fe-repeat" /></li>
                                            <li className="icons-list-item"><i className="fe fe-rewind" data-toggle="tooltip" title="fe fe-rewind" /></li>
                                            <li className="icons-list-item"><i className="fe fe-rotate-ccw" data-toggle="tooltip" title="fe fe-rotate-ccw" /></li>
                                            <li className="icons-list-item"><i className="fe fe-rotate-cw" data-toggle="tooltip" title="fe fe-rotate-cw" /></li>
                                            <li className="icons-list-item"><i className="fe fe-rss" data-toggle="tooltip" title="fe fe-rss" /></li>
                                            <li className="icons-list-item"><i className="fe fe-save" data-toggle="tooltip" title="fe fe-save" /></li>
                                            <li className="icons-list-item"><i className="fe fe-scissors" data-toggle="tooltip" title="fe fe-scissors" /></li>
                                            <li className="icons-list-item"><i className="fe fe-search" data-toggle="tooltip" title="fe fe-search" /></li>
                                            <li className="icons-list-item"><i className="fe fe-send" data-toggle="tooltip" title="fe fe-send" /></li>
                                            <li className="icons-list-item"><i className="fe fe-server" data-toggle="tooltip" title="fe fe-server" /></li>
                                            <li className="icons-list-item"><i className="fe fe-settings" data-toggle="tooltip" title="fe fe-settings" /></li>
                                            <li className="icons-list-item"><i className="fe fe-share" data-toggle="tooltip" title="fe fe-share" /></li>
                                            <li className="icons-list-item"><i className="fe fe-share-2" data-toggle="tooltip" title="fe fe-share-2" /></li>
                                            <li className="icons-list-item"><i className="fe fe-shield" data-toggle="tooltip" title="fe fe-shield" /></li>
                                            <li className="icons-list-item"><i className="fe fe-shield-off" data-toggle="tooltip" title="fe fe-shield-off" /></li>
                                            <li className="icons-list-item"><i className="fe fe-shopping-bag" data-toggle="tooltip" title="fe fe-shopping-bag" /></li>
                                            <li className="icons-list-item"><i className="fe fe-shopping-cart" data-toggle="tooltip" title="fe fe-shopping-cart" /></li>
                                            <li className="icons-list-item"><i className="fe fe-shuffle" data-toggle="tooltip" title="fe fe-shuffle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-sidebar" data-toggle="tooltip" title="fe fe-sidebar" /></li>
                                            <li className="icons-list-item"><i className="fe fe-skip-back" data-toggle="tooltip" title="fe fe-skip-back" /></li>
                                            <li className="icons-list-item"><i className="fe fe-skip-forward" data-toggle="tooltip" title="fe fe-skip-forward" /></li>
                                            <li className="icons-list-item"><i className="fe fe-slack" data-toggle="tooltip" title="fe fe-slack" /></li>
                                            <li className="icons-list-item"><i className="fe fe-slash" data-toggle="tooltip" title="fe fe-slash" /></li>
                                            <li className="icons-list-item"><i className="fe fe-sliders" data-toggle="tooltip" title="fe fe-sliders" /></li>
                                            <li className="icons-list-item"><i className="fe fe-smartphone" data-toggle="tooltip" title="fe fe-smartphone" /></li>
                                            <li className="icons-list-item"><i className="fe fe-speaker" data-toggle="tooltip" title="fe fe-speaker" /></li>
                                            <li className="icons-list-item"><i className="fe fe-square" data-toggle="tooltip" title="fe fe-square" /></li>
                                            <li className="icons-list-item"><i className="fe fe-star" data-toggle="tooltip" title="fe fe-star" /></li>
                                            <li className="icons-list-item"><i className="fe fe-stop-circle" data-toggle="tooltip" title="fe fe-stop-circle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-sun" data-toggle="tooltip" title="fe fe-sun" /></li>
                                            <li className="icons-list-item"><i className="fe fe-sunrise" data-toggle="tooltip" title="fe fe-sunrise" /></li>
                                            <li className="icons-list-item"><i className="fe fe-sunset" data-toggle="tooltip" title="fe fe-sunset" /></li>
                                            <li className="icons-list-item"><i className="fe fe-tablet" data-toggle="tooltip" title="fe fe-tablet" /></li>
                                            <li className="icons-list-item"><i className="fe fe-tag" data-toggle="tooltip" title="fe fe-tag" /></li>
                                            <li className="icons-list-item"><i className="fe fe-target" data-toggle="tooltip" title="fe fe-target" /></li>
                                            <li className="icons-list-item"><i className="fe fe-terminal" data-toggle="tooltip" title="fe fe-terminal" /></li>
                                            <li className="icons-list-item"><i className="fe fe-thermometer" data-toggle="tooltip" title="fe fe-thermometer" /></li>
                                            <li className="icons-list-item"><i className="fe fe-thumbs-down" data-toggle="tooltip" title="fe fe-thumbs-down" /></li>
                                            <li className="icons-list-item"><i className="fe fe-thumbs-up" data-toggle="tooltip" title="fe fe-thumbs-up" /></li>
                                            <li className="icons-list-item"><i className="fe fe-toggle-left" data-toggle="tooltip" title="fe fe-toggle-left" /></li>
                                            <li className="icons-list-item"><i className="fe fe-toggle-right" data-toggle="tooltip" title="fe fe-toggle-right" /></li>
                                            <li className="icons-list-item"><i className="fe fe-trash" data-toggle="tooltip" title="fe fe-trash" /></li>
                                            <li className="icons-list-item"><i className="fe fe-trash-2" data-toggle="tooltip" title="fe fe-trash-2" /></li>
                                            <li className="icons-list-item"><i className="fe fe-trending-down" data-toggle="tooltip" title="fe fe-trending-down" /></li>
                                            <li className="icons-list-item"><i className="fe fe-trending-up" data-toggle="tooltip" title="fe fe-trending-up" /></li>
                                            <li className="icons-list-item"><i className="fe fe-triangle" data-toggle="tooltip" title="fe fe-triangle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-truck" data-toggle="tooltip" title="fe fe-truck" /></li>
                                            <li className="icons-list-item"><i className="fe fe-tv" data-toggle="tooltip" title="fe fe-tv" /></li>
                                            <li className="icons-list-item"><i className="fe fe-twitter" data-toggle="tooltip" title="fe fe-twitter" /></li>
                                            <li className="icons-list-item"><i className="fe fe-type" data-toggle="tooltip" title="fe fe-type" /></li>
                                            <li className="icons-list-item"><i className="fe fe-umbrella" data-toggle="tooltip" title="fe fe-umbrella" /></li>
                                            <li className="icons-list-item"><i className="fe fe-underline" data-toggle="tooltip" title="fe fe-underline" /></li>
                                            <li className="icons-list-item"><i className="fe fe-unlock" data-toggle="tooltip" title="fe fe-unlock" /></li>
                                            <li className="icons-list-item"><i className="fe fe-upload" data-toggle="tooltip" title="fe fe-upload" /></li>
                                            <li className="icons-list-item"><i className="fe fe-upload-cloud" data-toggle="tooltip" title="fe fe-upload-cloud" /></li>
                                            <li className="icons-list-item"><i className="fe fe-user" data-toggle="tooltip" title="fe fe-user" /></li>
                                            <li className="icons-list-item"><i className="fe fe-user-check" data-toggle="tooltip" title="fe fe-user-check" /></li>
                                            <li className="icons-list-item"><i className="fe fe-user-minus" data-toggle="tooltip" title="fe fe-user-minus" /></li>
                                            <li className="icons-list-item"><i className="fe fe-user-plus" data-toggle="tooltip" title="fe fe-user-plus" /></li>
                                            <li className="icons-list-item"><i className="fe fe-user-x" data-toggle="tooltip" title="fe fe-user-x" /></li>
                                            <li className="icons-list-item"><i className="fe fe-users" data-toggle="tooltip" title="fe fe-users" /></li>
                                            <li className="icons-list-item"><i className="fe fe-video" data-toggle="tooltip" title="fe fe-video" /></li>
                                            <li className="icons-list-item"><i className="fe fe-video-off" data-toggle="tooltip" title="fe fe-video-off" /></li>
                                            <li className="icons-list-item"><i className="fe fe-voicemail" data-toggle="tooltip" title="fe fe-voicemail" /></li>
                                            <li className="icons-list-item"><i className="fe fe-volume" data-toggle="tooltip" title="fe fe-volume" /></li>
                                            <li className="icons-list-item"><i className="fe fe-volume-1" data-toggle="tooltip" title="fe fe-volume-1" /></li>
                                            <li className="icons-list-item"><i className="fe fe-volume-2" data-toggle="tooltip" title="fe fe-volume-2" /></li>
                                            <li className="icons-list-item"><i className="fe fe-volume-x" data-toggle="tooltip" title="fe fe-volume-x" /></li>
                                            <li className="icons-list-item"><i className="fe fe-watch" data-toggle="tooltip" title="fe fe-watch" /></li>
                                            <li className="icons-list-item"><i className="fe fe-wifi" data-toggle="tooltip" title="fe fe-wifi" /></li>
                                            <li className="icons-list-item"><i className="fe fe-wifi-off" data-toggle="tooltip" title="fe fe-wifi-off" /></li>
                                            <li className="icons-list-item"><i className="fe fe-wind" data-toggle="tooltip" title="fe fe-wind" /></li>
                                            <li className="icons-list-item"><i className="fe fe-x" data-toggle="tooltip" title="fe fe-x" /></li>
                                            <li className="icons-list-item"><i className="fe fe-x-circle" data-toggle="tooltip" title="fe fe-x-circle" /></li>
                                            <li className="icons-list-item"><i className="fe fe-x-square" data-toggle="tooltip" title="fe fe-x-square" /></li>
                                            <li className="icons-list-item"><i className="fe fe-zap" data-toggle="tooltip" title="fe fe-zap" /></li>
                                            <li className="icons-list-item"><i className="fe fe-zap-off" data-toggle="tooltip" title="fe fe-zap-off" /></li>
                                            <li className="icons-list-item"><i className="fe fe-zoom-in" data-toggle="tooltip" title="fe fe-zoom-in" /></li>
                                            <li className="icons-list-item"><i className="fe fe-zoom-out" data-toggle="tooltip" title="fe fe-zoom-out" /></li>
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
export default connect(mapStateToProps, mapDispatchToProps)(IconsFeather);