import ScreenTitle from "../../components/interface/ScreenTitle/ScreenTitle";
import ScreenWrapper from "../../components/interface/ScreenWrapper/ScreenWrapper";
import STRINGS from "../../constants/Strings";

const CreateRoomScreen = () => {
  return (
    <ScreenWrapper>
      {/* header with title and maybe some icon */}
      <ScreenTitle title={STRINGS.createRoom.title} />

      {/* input to enter room name */}

      {/* input to enter room size */}

      {/* switch for private room */}

      {/* if private room is enabled, show input to enter room password */}

      {/* switch for advanced settings */}

      {/* if advanced settings are enabled, show input to enter room number of mafia */}

      {/* if advanced settings are enabled, show input to enter room number of doctors */}

      {/* if advanced settings are enabled, show input to enter room number of policeman */}

      {/* button to create room */}
    </ScreenWrapper>
  );
};

export default CreateRoomScreen;
