import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <h1 className={css.title}>Hello, my dear friend!</h1>
      <p className={css.description}>Here you can find and manage your contacts.</p>
      <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Cat GIF" />
    </>
  );
}
