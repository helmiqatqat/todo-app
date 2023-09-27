import { Card, Text, Badge, CloseButton, Group } from '@mantine/core';
import './index.css'

export default function ListItem({item, deleteItem}) {
  return (
    <Card 
    style={{width: '100%'}}
    shadow="sm" padding="lg" radius="md" withBorder>

      <Group
        style={{justifyContent: "space-between", alignItems: 'center'}} mb="xs">
        <Group>
          <Badge color="pink" variant="light">
            {item?.complete ? "Completed" : "Pending"}
          </Badge>
          <Text fw={500}>{item.assignee}</Text>
        </Group>
        <CloseButton variant="light" color="red" mt="0" radius="md"
          onClick={() => deleteItem(item.id)}>
        </CloseButton>
      </Group>

      <Text size="sm" c="dimmed">
        {item.details}
      </Text>
      <Text size="sm" c="dimmed" className='difficulty'>
        Difficulty: {item.difficulty}
      </Text>
    </Card>
  );
}