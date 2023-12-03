import { Field, Formik } from "formik";
import { View } from "react-native";

import FormNumberInput from "../../components/interface/FormNumberInput/FormNumberInput";
import FormSwitch from "../../components/interface/FormSwitch/FormSwitch";
import FormTextInput from "../../components/interface/FormTextInput/FormTextInput";
import ScreenTitle from "../../components/interface/ScreenTitle/ScreenTitle";
import ScreenWrapper from "../../components/interface/ScreenWrapper/ScreenWrapper";
import STRINGS from "../../constants/Strings";
import { Room } from "../../types/Room";

type CreateRoomFormValues = Omit<Room, "uuid" | "phase">;

const CreateRoomScreen = () => {
  let initialValues: CreateRoomFormValues = {
    name: "",
    size: 0,
    isPrivate: false,
    password: "",
    numberOfMafia: 0,
    numberOfDoctors: 0,
    numberOfPoliceman: 0,
  };

  return (
    <ScreenWrapper>
      {/* header with title and maybe some icon */}
      <ScreenTitle title={STRINGS.createRoom.title} />

      <Formik
        initialValues={initialValues}
        onSubmit={(values: CreateRoomFormValues) => console.log(values)}
      >
        {({ handleSubmit, setFieldValue, values }) => (
          <View>
            {/* input to enter room name */}
            <Field
              component={FormTextInput}
              name="name"
              placeholder={STRINGS.createRoom.formRoomNamePlaceholder}
              label={STRINGS.createRoom.formRoomName}
            />

            {/* input to enter room size */}
            <Field
              component={FormNumberInput}
              name="size"
              placeholder={8}
              label={STRINGS.createRoom.formRoomSize}
              minVal={6}
              maxVal={16}
            />

            {/* switch for private room */}
            <Field name="isPrivate">
              {() => {
                return (
                  <FormSwitch
                    label={STRINGS.createRoom.formRoomPrivate}
                    value={values.isPrivate}
                    onValueChange={(value) => {
                      setFieldValue("isPrivate", value);
                    }}
                  />
                );
              }}
            </Field>

            {/* switch for advanced settings */}

            {/* if advanced settings are enabled, show input to enter room number of mafia */}

            {/* if advanced settings are enabled, show input to enter room number of doctors */}

            {/* if advanced settings are enabled, show input to enter room number of policeman */}

            {/* button to create room */}
          </View>
        )}
      </Formik>
    </ScreenWrapper>
  );
};

export default CreateRoomScreen;
