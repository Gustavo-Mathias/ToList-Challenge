import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div>
        <Input />
        <Button />
      </div>
    </div>
  );
}
