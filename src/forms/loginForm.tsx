import { Formik, FormikHelpers } from "formik";
import { Text, TextInput, View } from "react-native";
import { object, string } from "yup";
import { useState, useContext } from "react";
import { useToast } from "react-native-toast-notifications";
import { AuthContext } from "@utils/authContext";
import { Button } from "@components/index";
import { IconLogin } from "@assets/index";

export const LoginForm = ({
  isLogging,
  navigation,
}: {
  isLogging: boolean;
  navigation: any;
}) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    let toastId: string;
    setIsLoading(true);
    if (isLogging) {
      toastId = toast.show("Connexion...", { type: "loading" });
      signIn({
        password: values.password,
        username: values.account,
      }).then((response: any) => {
        if (response === "ERR_BAD_REQUEST")
          toast.update(toastId, `Compte ou mot de passe incorrect`, {
            type: "danger",
          });
        else
          toast.update(toastId, `Bonjour ${response.username} 😊`, {
            type: "success",
          });
        setIsLoading(false);
      });
    } else {
      toastId = toast.show("Création...", { type: "loading" });
      signUp({ password: values.password, username: values.account }).then(
        (response: any) => {
          if (response === "ERR_BAD_REQUEST")
            toast.update(toastId, "Ce nom de compte existe déjà", {
              type: "danger",
            });
          else
            toast.update(
              toastId,
              `Compte créé, bienvenue ${response.username} 🤗`,
              {
                type: "success",
              }
            );
          setIsLoading(false);
        }
      );
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
              <TextInput
                className="border-zinc-300 dark:text-white dark:border-zinc-700 border-[1px] px-2 py-1 rounded-sm w-[180px]"
                placeholder="Compte"
                placeholderTextColor="#b0b0b0"
                onChangeText={form.handleChange("account")}
                value={form.values.account}
                onBlur={form.handleBlur("account")}
              />
              <Text className="text-red-500">
                {form.touched.account && form.errors.account}
              </Text>
            </View>

            {/* Password */}
            <View>
              <TextInput
                className="border-zinc-300 dark:text-white dark:border-zinc-700 border-[1px] px-2 py-1 rounded-sm w-[180px]"
                placeholder="Mot de passe"
                placeholderTextColor="#b0b0b0"
                secureTextEntry
                textContentType="password"
                onChangeText={form.handleChange("password")}
                value={form.values.password}
                onBlur={form.handleBlur("password")}
              />
              <Text className="text-red-500">
                {form.touched.password && form.errors.password}
              </Text>
            </View>

            <Button
              text={isLogging ? "Se connecter" : "Créer mon compte"}
              color="#61a146"
              textColor="white"
              loading={isLoading}
              disabled={!!form.errors.account || !!form.errors.password}
              onPress={() => form.handleSubmit()}
              icon={<IconLogin className="text-white" width={22} height={22} />}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
