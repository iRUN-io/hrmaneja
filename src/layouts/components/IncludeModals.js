import React, { Component } from "react";
import { connect } from "react-redux";
import LoginModal from "../../components/Modals/Login/LoginModal";
import ForgotPasswordModal from "../../components/Modals/Password/ForgotPassword/ForgotPasswordModal";
import ResetPasswordModal from "../../components/Modals/Password/ResetPassword/ResetPasswordModal";
import ChangePasswordModal from "../../components/Modals/Password/ChangePassword/ChangePasswordModal";
import RaffleRepeatModal from "../../components/Modals/RaffleRepeat/RaffleRepeatModal";
import CreateChallengeRewardsModal from "../../components/Modals/Translation/CreateChallengeRewards/CreateChallengeRewardsModal";
import PublishRaffleModal from "../../components/Modals/Translation/PublishRaffle/PublishRaffleModal";
import ResetLeaderboardModal from "../../components/Modals/ResetLeaderboard/ResetLeaderboardModal";

class IncludeModals extends Component {
  render() {
    return !this.props.isLoggedIn ? (
      <>
        <LoginModal />
        <ForgotPasswordModal />
        <ResetPasswordModal />
      </>
    ) : (
        <>
          <ChangePasswordModal />
          <RaffleRepeatModal />
          <CreateChallengeRewardsModal />
          <PublishRaffleModal />
          <ResetLeaderboardModal />
        </>
      );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default connect(mapStateToProps)(IncludeModals);
