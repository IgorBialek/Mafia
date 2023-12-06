import { Field, Formik } from "formik";

import FormNumberInput from "../../components/interface/FormNumberInput/FormNumberInput";
import FormSwitch from "../../components/interface/FormSwitch/FormSwitch";
import FormTextInput from "../../components/interface/FormTextInput/FormTextInput";
import FormWrapper from "../../components/interface/FormWrapper/FormWrapper";
import ScreenTitle from "../../components/interface/ScreenTitle/ScreenTitle";
import ScreenWrapper from "../../components/interface/ScreenWrapper/ScreenWrapper";
import STRINGS from "../../constants/Strings";
import { Room } from "../../types/Room";

type CreateRoomFormValues = Omit<Room, "uuid" | "phase">;

const CreateRoomScreen = () => {
  let initialValues: CreateRoomFormValues = {
    name: "",
    size: 8,
    isPrivate: false,
    password: "",
    numberOfMafia: 3,
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
          <FormWrapper>
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
              label={STRINGS.createRoom.formRoomSize}
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
                    label={STRINGS.createRoom.formRoomPrivate}
                    value={values.isPrivate}
                    onValueChange={(value) => {
                      setFieldValue("isPrivate", value);
                    }}
                  />
                );
              }}
            </Field>

            {/* button to create room */}
          </FormWrapper>
        )}
      </Formik>
    </ScreenWrapper>
  );
};

export default CreateRoomScreen;
