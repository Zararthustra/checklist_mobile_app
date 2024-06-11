import { Formik, FormikHelpers } from "formik";
import { Button, Text, TextInput, View } from "react-native";
import { object, string } from "yup";
import { useContext } from "react";
import { AuthContext } from "@utils/authContext";

export const LoginForm = ({
  isLogging,
  navigation,
}: {
  isLogging: boolean;
  navigation: any;
}) => {
  const { signIn, signUp } = useContext(AuthContext);

  const validationSchema = object({
    account: string().required("Compte requis"),
    password: string().required("Mot de passe requis"),
  });

  const onSubmitHandler = async (
    values: {
      account: string;
      password: string;
    },
    action: FormikHelpers<typeof values>
  ) => {
    if (isLogging)
      signIn({ password: values.password, username: values.account });
    else {
      signUp({ password: values.password, username: values.account });
      navigation.goBack();
    }
    action.resetForm();
  };

  return (
    <View>
      <Formik
        initialValues={{
          account: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmitHandler}
      >
        {(form) => (
          <View>
            {/* Account */}
            <View>
              <Text>Compte</Text>
              <TextInput
                className="border"
                placeholder="Compte"
                onChangeText={form.handleChange("account")}
                value={form.values.account}
                onBlur={form.handleBlur("account")}
              />
              <Text>{form.touched.account && form.errors.account}</Text>
            </View>

            {/* Password */}
            <View>
              <Text>Mot de passe</Text>
              <TextInput
                className="border"
                placeholder="Mot de passe"
                textContentType="password"
                onChangeText={form.handleChange("password")}
                value={form.values.password}
                onBlur={form.handleBlur("password")}
              />
              <Text>{form.touched.password && form.errors.password}</Text>
            </View>

            <Button
              title={isLogging ? "Se connecter" : "Créer mon compte"}
              disabled={!!form.errors.account || !!form.errors.password}
              onPress={() => form.handleSubmit()}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
