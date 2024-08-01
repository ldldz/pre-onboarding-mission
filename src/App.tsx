import { useState } from "react";
import { SearchResultList } from "./components/Search/SearchResultList";

const App = () => {
  const [keyword, setKeyword] = useState<string>("");

  return (
    <form>
      <div>
        <input
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        {keyword && <SearchResultList keyword={keyword} />}
      </div>
      <button type="submit">🔍</button>
    </form>
  );
};

export default App;
