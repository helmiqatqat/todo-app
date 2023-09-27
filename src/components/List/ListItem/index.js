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
          <Text fw={500}>Hi</Text>
        </Group>
        <CloseButton variant="light" color="red" mt="0" radius="md"
          onClick={() => deleteItem(item.id)}>
        </CloseButton>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      
    </Card>
  );
}