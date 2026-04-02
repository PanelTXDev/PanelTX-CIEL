import FormationPage from '../components/FormationPage';
import { BookOpen } from 'lucide-react';
import heroBacPro from '../assets/images/bac-pro-ciel.png';

export default function BacProCIEL() {
  return (
    <FormationPage
      title="Bac Pro CIEL"
      subtitle="Cybersécurité · Informatique · Réseaux · Électronique"
      duration="Formation · 3 ans"
      heroImage={heroBacPro}
      heroAlt="Laboratoire réseau Bac Pro CIEL"
      colorScheme="blue"
      icon={BookOpen}
      description="Une formation complète de 3 ans pour devenir technicien qualifié, maîtriser les réseaux, les systèmes et les bases de la cybersécurité."
      objectives={[
        "Maîtriser les technologies réseau (routage, commutation, sécurité)",
        "Administrer des systèmes informatiques (Windows, Linux)",
        "Déployer et sécuriser des services réseau",
        "Diagnostiquer et résoudre des problèmes techniques",
        "Communiquer efficacement en milieu professionnel"
      ]}
      program={[
        {
          title: "1ère année - Découverte des bases",
          items: [
            "Électronique fondamentale",
            "Initiation aux réseaux informatiques",
            "Systèmes d'exploitation",
            "Outils professionnels"
          ]
        },
        {
          title: "2ème année - Approfondissement",
          items: [
            "Réseaux avancés (TCP/IP, routage)",
            "Sécurité informatique de base",
            "Administration système",
            "Premier stage en entreprise"
          ]
        },
        {
          title: "3ème année - Spécialisation",
          items: [
            "Cybersécurité appliquée",
            "Projets professionnels",
            "Stage long en entreprise",
            "Préparation aux examens"
          ]
        }
      ]}
      careers={[
        "Technicien réseau",
        "Technicien support informatique",
        "Opérateur en cybersécurité",
        "Technicien en électronique"
      ]}
      admission="Admission sur dossier après la classe de 3ème. Formation accessible aux élèves motivés par les technologies numériques."
      contact="Contactez-nous pour plus d'informations sur l'admission et les modalités d'inscription."
      testId="title-bac-pro-ciel"
    />
  );
}