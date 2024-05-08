import React, { useState } from "react";
import "./index.css";

const skins = [
  {
    id: 3455,
    rarity: "#17e1efef",
    name: "Billie Eilish",
    cost: "3200",
    image:
      "https://titles.trackercdn.com/fortniteapio/images/shop/882768ed7652186a7aa2a69990b2c917cb53e85192b60aaf97c4071b55f874e7/v2/MI_Bundle_Featured_Adapter/background.png?v=7870b849f453e905989d135b8cf4c77753c90114",
  },
  {
    id: 3456,
    rarity: "#44abefef",
    name: "Kyra",
    cost: "1800",
    image:
      "https://titles.trackercdn.com/fortniteapio/images/shop/fc00e7d35c428a84ae70aa205ba72dad0d94f295b928544f231d22062f0b3f8b/v2/MI_CID_806_F_GreenJacket/background.png?v=7870b849f453e905989d135b8cf4c77753c90114",
  },
  {
    id: 3457,
    rarity: "purple",
    name: "TwitchCon Bundle",
    cost: "2400",
    image:
      "https://titles.trackercdn.com/fortniteapio/images/shop/71325a29ace2e0b98b415d4dae06aaad47b8f4619c54be26411f8125530540a8/v2/MI_Bundle_Featured_Architect_Clown/background.png?v=7870b849f453e905989d135b8cf4c77753c90114",
  },
];

export default function App() {
  const [open, setOpen] = useState(false);
  const [skinList, setSkinList] = useState(skins);

  function handleDelete(skin) {
    setSkinList((skins) => skins.filter((sk) => sk.name !== skin));
  }

  return (
    <div className="App">
      <Header open={open} setOpen={setOpen}></Header>

      {open ? (
        <FormAddNewTile
          skinList={skinList}
          setSkinList={setSkinList}
        ></FormAddNewTile>
      ) : (
        ""
      )}
      <ShowAllTiles skinList={skinList} onDelete={handleDelete}></ShowAllTiles>
    </div>
  );
}

function Header({ open, setOpen }) {
  return (
    <div>
      <h1>
        My locker 😍👉👈{" "}
        {
          <OpenFormAddNewTile
            open={open}
            setOpen={setOpen}
          ></OpenFormAddNewTile>
        }
      </h1>
    </div>
  );
}

function OpenFormAddNewTile({ open, setOpen }) {
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <button style={{ width: "48px", height: "24px" }} onClick={handleOpen}>
      {open ? "✖️" : "🟰"}
    </button>
  );
}

function FormAddNewTile({ skinList, setSkinList }) {
  const [name, setName] = useState("");
  const [rarity, setRarity] = useState("");
  const [cost, setCost] = useState("");
  const [image, setImage] = useState("");

  const id = crypto.randomUUID();

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || rarity === "" || cost === "" || image === "") return;

    setSkinList([
      ...skinList,
      {
        name: name,
        rarity: handleRarity(rarity),
        cost: cost,
        image: image,
        id: id,
      },
    ]);
  }

  function handleRarity(rarity) {
    if (rarity === "Common") return "grey";
    if (rarity === "Uncommon") return "green";
    if (rarity === "Rare") return "#44abefef";
    if (rarity === "Epic") return "purple";
    if (rarity === "Legendary") return "orange";
    if (rarity === "Iconic") return "#17e1efef";
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input text="Name " value={name} setValue={setName}></Input>
      <br />
      <b> Rarity:</b>
      <select
        text="Rarity "
        value={rarity}
        onChange={(e) => setRarity(e.target.value)}
      >
        <option>Common</option>
        <option>Uncommon</option>
        <option>Rare</option>
        <option>Epic</option>
        <option>Legendary</option>
        <option>Iconic</option>
      </select>
      <br />
      <br />
      <Input text="Cost " value={cost} setValue={setCost}></Input>
      <br />
      <Input text="Image " value={image} setValue={setImage}></Input>
      <br />
      <button>Add new 🔥</button>
    </form>
  );
}

function Input({ text, value, setValue }) {
  return (
    <div>
      <b>{text}: </b>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <br />
    </div>
  );
}

function ShowAllTiles({ skinList, onDelete }) {
  return (
    <div className="flashcards">
      {skinList.map((skin) => (
        <RenderOneTile
          onDelete={onDelete}
          rarity={skin.rarity}
          image={skin.image}
          name={skin.name}
          cost={skin.cost}
          key={skin.id}
        ></RenderOneTile>
      ))}
    </div>
  );
}

function RenderOneTile({ rarity, name, image, cost, onDelete }) {
  return (
    <div style={{ backgroundColor: rarity }}>
      <img
        style={{ background: "linear-gradient(#e66465, #9198e5)" }}
        src={image}
        alt={name}
      ></img>
      <h2>{name}</h2>
      <b>{cost} V-Bucks</b>
      <button onClick={() => onDelete(name)}>❌</button>;
    </div>
  );
}
