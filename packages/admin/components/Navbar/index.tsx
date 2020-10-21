import styles from './Navbar.module.scss';

export function Navbar() {
    return (
        <div className={styles.Navbar}>
            <span className={styles.logo}>Admin page</span>
            <ul className={styles.menus}>
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>
        </div>
    );
}
