import { Field, Formik } from "formik";
import Toast from "react-native-toast-message";
import * as yup from "yup";

import { Room } from "../../../../Types/Room";
import FormNumberInput from "../../components/interface/FormNumberInput/FormNumberInput";
import FormSubmitButton from "../../components/interface/FormSubmitButton/FormSubmitButton";
import FormSwitch from "../../components/interface/FormSwitch/FormSwitch";
import FormTextInput from "../../components/interface/FormTextInput/FormTextInput";
import FormWrapper from "../../components/interface/FormWrapper/FormWrapper";
import ScreenTitle from "../../components/interface/ScreenTitle/ScreenTitle";
import ScreenWrapper from "../../components/interface/ScreenWrapper/ScreenWrapper";
import STRINGS from "../../constants/Strings";
import { METRICS } from "../../themes/Metrics";

type CreateRoomFormValues = Omit<Room, "uuid" | "phase">;

const validationSchema = yup.object().shape({
  name: yup.string().required(STRINGS.createRoom.formRoomNameRequired),
});

const CreateRoomScreen = () => {
  let initialValues: CreateRoomFormValues = {
    name: "",
    size: 8,
    isPrivate: false,
    password: "null",
    numberOfMafia: 3,
  };

  return (
    <ScreenWrapper>
      {/* header with title and maybe some icon */}
      <ScreenTitle title={STRINGS.createRoom.title} />

      <Formik
        validationSchema={validationSchema}
        validateOnMount={true}
        initialValues={initialValues}
        onSubmit={(values: CreateRoomFormValues) => console.log(values)}
      >
        {({ handleSubmit, setFieldValue, values, errors }) => (
          <FormWrapper>
            {/* input to enter room name */}
            <Field
              component={FormTextInput}
              name="name"
              placeholder={STRINGS.createRoom.formRoomNamePlaceholder}
              title={STRINGS.createRoom.formRoomName}
              value={values.name}
              valid={values.name !== ""}
              onChangeText={(value: string) => {
                setFieldValue("name", value);
              }}
            />

            {/* input to enter room size */}
            <Field
              component={FormNumberInput}
              name="size"
              title={STRINGS.createRoom.formRoomSize}
              minVal={6}
              maxVal={16}
              value={values.size}
              onValueChange={(value: number) => {
                setFieldValue("size", value);
              }}
            />

            {/* switch for private room */}
            <Field name="isPrivate">
              {() => {
                return (
                  <FormSwitch
                    title={STRINGS.createRoom.formRoomPrivate}
                    value={values.isPrivate}
                    onValueChange={(value) => {
                      setFieldValue("isPrivate", value);
                    }}
                  />
                );
              }}
            </Field>

            {/* button to create room */}
            <FormSubmitButton
              onPress={() => {
                if (Object.keys(errors).length > 0) {
                  Toast.show({
                    type: "error",
                    position: "top",
                    text1: errors.name,
                    topOffset: 0,
                  });
                }

                handleSubmit();
              }}
              title={STRINGS.createRoom.buttonCreateRoom}
              style={{
                position: "absolute",
                bottom: METRICS.formSubmitButton.container.bottom,
                alignSelf: "center",
              }}
            />
          </FormWrapper>
        )}
      </Formik>
    </ScreenWrapper>
  );
};

export default CreateRoomScreen;
