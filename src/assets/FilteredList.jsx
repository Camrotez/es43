import React, { useMemo } from 'react';

function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter(item => item.age >= 18);
  }, [list]);

  return (
    <div>
      <ul>{filteredList.map(item =><li key={item.id}>{item.name} {item.age}</li>)}
      </ul>
    </div>
  );
}
export default FilteredList