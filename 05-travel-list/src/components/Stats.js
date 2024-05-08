export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list. 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const procentPacked = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      {procentPacked === 100 ? (
        <em>You got everything ready to go! ✈️</em>
      ) : (
        <em>
          💼 You have {numItems} items on your list, and you already packed{" "}
          {numPackedItems} ({procentPacked}%)
        </em>
      )}
    </footer>
  );
}
