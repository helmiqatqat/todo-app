
import "./list.scss";

// import { SettingsProvider } from "../context/SettingsProvider.jsx";
import { useSettings } from '../context/SettingsProvider';


import { Paper, Text, Group, CloseButton, Checkbox } from "@mantine/core";
function List({ items, currentPage, deleteItem, toggleComplete }) {


  const { settings, updateSettings } = useSettings();

  console.log(settings)

  // const settings = useContext(SettingsProvider);

  // settings.hideCompleted? items = items.filter((item) => !item.complete) : ''

  items = items.sort((a, b) => b[settings.sortField] - a[settings.sortField]);

  const itemsToDisplay = items.slice(
    (currentPage - 1) * settings.displayItems,
    currentPage * settings.displayItems
  );



  return (
    <>
      <div>
      {itemsToDisplay.map((item) => (
        <>
          <section className='list-item'>
            <Paper withBorder p='lg' radius='md' shadow='md'>
              <Group position='apart' mb='xs'>
                <Text fz='lg' fw={500}>
                 {item.complete? <span className='copmleted'>Copmleted</span> : <span className='pendindg'>Pending</span>} 
                  {item?.assignee?.toUpperCase()}
                </Text>
                <CloseButton
                  mr={-9}
                  mt={-9}
                  onClick={() => deleteItem(item.id)}
                />
              </Group>
              <Text c='dimmed' fz='s'>
                {item.text}
              </Text>

              <Group position='apart' mt='lg'>
                <Text color='blue' size='xs'>
                  Difficulty : {item.difficulty}
                </Text>

                {!item.complete?<Checkbox
                  key={item.id}
                  label='completed'
                  color='teal'
                  onChange={() =>
                    setTimeout(() => {
                      toggleComplete(item.id);
                    }, 200)
                  }
                /> : "" }
              </Group>
            </Paper>
          </section>
        </>
      ))}
    </div>
    </>
  
  );
}

export default List;
