import errorImage from './assets/eslint-error-image.png';

function App() {
  return (
    <>
      <div className="
        tw:@container/notifications tw:z-50 tw:border-l tw:border-[#0d5664] tw:bg-[linear-gradient(180deg,#07172b_0%,#051626_100%)] tw:p-0 tw:text-white
        tw:data-[side=right]:w-[min(100vw,36rem)] tw:data-[side=right]:max-w-none
      "
      />

      <img src={errorImage} alt="" />
    </>
  );
}

export default App;
