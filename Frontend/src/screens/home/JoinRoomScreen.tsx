import ScreenTitle from "../../components/interface/ScreenTitle/ScreenTitle";
import ScreenWrapper from "../../components/interface/ScreenWrapper/ScreenWrapper";
import STRINGS from "../../constants/Strings";

const JoinRoomScreen = () => {
  return (
    <ScreenWrapper>
      <ScreenTitle title={STRINGS.joinRoom.title} />
    </ScreenWrapper>
  );
};

export default JoinRoomScreen;
