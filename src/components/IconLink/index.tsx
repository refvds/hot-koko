import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

type IconLinkProps = {
  icon: ReactNode;
  title?: string;
  path: string;
};

const IconLink: FC<IconLinkProps> = ({ icon, title, path }) => {
  return (
    <Link className={styles.link} to={path}>
      {icon}
      <span className={styles.title}>{title}</span>
    </Link>
  );
};

export default IconLink;
