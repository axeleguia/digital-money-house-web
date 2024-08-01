import styles from "./profile-header.module.css";

type ProfileHeaderProps = {
  firstname: string;
  lastname: string;
};
export const ProfileHeader = ({ firstname, lastname }: ProfileHeaderProps) => {
  return (
    <div id={styles.profileHeader}>
      <div>
        {firstname[0]}
        {lastname[0]}
      </div>
      <div>
        Hola, {firstname} {lastname}
      </div>
    </div>
  );
};
