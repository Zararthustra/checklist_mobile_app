import { View, Text, Pressable, Linking, ScrollView } from "react-native";

export const PrivacyRules = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView>
      <View className="flex flex-col p-2 bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-100 h-full">
        <Text className="dark:text-zinc-100 mb-6 text-3xl font-bold">
          Règles de Confidentialité
        </Text>

        <View className="mb-6">
          <Text className="dark:text-zinc-100 mb-4 text-xl font-semibold">
            1. Introduction
          </Text>
          <Text className="dark:text-zinc-100">
            Bienvenue sur l'application Checklist. Nous respectons votre vie
            privée et nous nous engageons à protéger vos informations
            personnelles. Cette politique de confidentialité explique comment
            nous recueillons, utilisons, et partageons vos informations lorsque
            vous utilisez notre Application.
          </Text>
        </View>

        <View className="mb-6">
          <Text className="dark:text-zinc-100 mb-4 text-xl font-semibold">
            2. Informations que nous collectons
          </Text>
          <Text className="dark:text-zinc-100">
            Nous collectons et traitons les types de données suivants :
          </Text>
          <View className="ml-4 list-inside list-disc">
            <Text className="dark:text-zinc-100">
              -{" "}
              <Text className="dark:text-zinc-100 font-bold">
                Nom du compte
              </Text>{" "}
              : le nom que vous utilisez pour créer votre compte sur
              l'Application.
            </Text>
            <Text className="dark:text-zinc-100">
              -{" "}
              <Text className="dark:text-zinc-100 font-bold">Mot de passe</Text>{" "}
              : le mot de passe que vous utilisez pour accéder à votre compte,
              qui est stocké de manière chiffrée.
            </Text>
            <Text className="dark:text-zinc-100">
              - <Text className="dark:text-zinc-100 font-bold">Checklists</Text>{" "}
              : les listes de tâches que vous créez et gérez au sein de
              l'Application.
            </Text>
          </View>
        </View>

        <View className="mb-6">
          <Text className="dark:text-zinc-100 mb-4 text-xl font-semibold">
            3. Utilisation des informations
          </Text>
          <Text className="dark:text-zinc-100">
            Nous n'utilisons pas vos informations.
          </Text>
        </View>

        <View className="mb-6">
          <Text className="dark:text-zinc-100 mb-4 text-xl font-semibold">
            4. Partage des informations
          </Text>
          <Text className="dark:text-zinc-100">
            Nous ne partageons pas vos informations personnelles avec des tiers
            sauf dans les cas suivants :
          </Text>
          <View className="ml-4 list-inside list-disc">
            <Text className="dark:text-zinc-100">
              - D'après une demande spécifique de votre part et avec votre
              consentement
            </Text>
            <Text className="dark:text-zinc-100">
              - Pour se conformer à une obligation légale
            </Text>
            <Text className="dark:text-zinc-100">
              - Pour protéger nos droits et notre propriété
            </Text>
          </View>
        </View>

        <View className="mb-6">
          <Text className="dark:text-zinc-100 mb-4 text-xl font-semibold">
            5. Sécurité des données
          </Text>
          <Text className="dark:text-zinc-100">
            Nous prenons des mesures raisonnables pour protéger vos informations
            personnelles contre la perte, le vol, l'utilisation abusive et
            l'accès non autorisé. Cependant, aucune méthode de transmission sur
            Internet ou de stockage électronique n'est totalement sécurisée.
          </Text>
        </View>

        <View className="mb-6">
          <Text className="dark:text-zinc-100 mb-4 text-xl font-semibold">
            6. Vos droits
          </Text>
          <Text className="dark:text-zinc-100">Vous avez le droit de :</Text>
          <View className="ml-4 list-inside list-disc">
            <Text className="dark:text-zinc-100">
              - Accéder à vos informations personnelles
            </Text>
            <Text className="dark:text-zinc-100">
              - Rectifier vos informations personnelles si elles sont
              incorrectes ou incomplètes
            </Text>
            <Text className="dark:text-zinc-100">
              - Demander la suppression de vos informations personnelles
            </Text>
            <Text className="dark:text-zinc-100">
              - Demander la limitation du traitement de vos informations
              personnelles
            </Text>
            <Text className="dark:text-zinc-100">
              - Vous opposer au traitement de vos informations personnelles
            </Text>
            <Text className="dark:text-zinc-100">
              - Demander la portabilité de vos informations personnelles
            </Text>
          </View>
          <Text className="dark:text-zinc-100">
            Pour exercer ces droits, veuillez nous contacter à
            checklist.v2.app@gmail.com.
          </Text>
        </View>

        <View className="mb-6">
          <Text className="dark:text-zinc-100 mb-4 text-xl font-semibold">
            7. Informations collectées par nos hébergeur
          </Text>
          <Text className="dark:text-zinc-100">
            Notre Application est hébergée par Hostinger et PythonAnywhere. Ils
            peuvent collecter certaines informations techniques, y compris les
            adresses IP, à des fins de sécurité et de surveillance de la
            performance des services. Pour plus de détails sur les pratiques de
            collecte de données de ces hébergeurs, veuillez consulter leur
            politique de confidentialité:{" "}
            <Text
              className="text-blue-500 underline"
              onPress={() =>
                Linking.openURL(
                  "https://www.hostinger.fr/politique-de-confidentialite"
                )
              }
            >
              Hostinger
            </Text>
            ,{" "}
            <Text
              className="text-blue-500 underline"
              onPress={() =>
                Linking.openURL("https://www.pythonanywhere.com/privacy_v2/")
              }
            >
              PythonAnywhere
            </Text>
            .
          </Text>
        </View>

        <View className="mb-6">
          <Text className="dark:text-zinc-100 mb-4 text-xl font-semibold">
            8. Modifications de cette politique de confidentialité
          </Text>
          <Text className="dark:text-zinc-100">
            Nous pouvons mettre à jour cette politique de confidentialité de
            temps en temps. Nous vous informerons de tout changement en publiant
            la nouvelle politique de confidentialité sur cette page. Nous vous
            conseillons de consulter cette politique de confidentialité
            périodiquement pour toute modification.
          </Text>
        </View>

        <View className="mb-6">
          <Text className="dark:text-zinc-100 mb-4 text-xl font-semibold">
            9. Contact
          </Text>
          <Text className="dark:text-zinc-100">
            Si vous avez des questions concernant cette politique de
            confidentialité, veuillez nous contacter à
            checklist.v2.app@gmail.com.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
