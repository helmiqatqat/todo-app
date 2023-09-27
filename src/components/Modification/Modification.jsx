import "./Modiication.scss";
import {
  NumberInput,
  MantineProvider,
  Select,
  Switch,
  Card,
  Text,
  Alert,
} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import { SettingsContext } from "../../context/settings/Settings";
import { useContext } from "react";

const Modification = () => {
  const state = useContext(SettingsContext);
  console.log(state);
  return (
    <>
      <div className="alertContain">
        {state.alert && (
          <Alert
            icon={<IconAlertCircle size="1rem" />}
            title="Saved!"
            color="violet"
            className="alert"
            radius="md"
          >
            New settings have been saved successfully
          </Alert>
        )}
        {state.reset && (
          <Alert
            icon={<IconAlertCircle size="1rem" />}
            title="Reset!"
            color="pink"
            className="alert"
            radius="md"
          >
            Settings have been reset successfully
          </Alert>
        )}
      </div>
      <div className="settingsContain">
        <h1>Manage Settings</h1>
        <div className="con">
          <div className="update">
            <MantineProvider
              inherit
              theme={{
                components: {
                  InputWrapper: {
                    styles: (theme) => ({
                      label: {
                        backgroundColor:
                          theme.colorScheme === "dark"
                            ? "rgba(255, 255, 255, .1)"
                            : "rgba(0, 0, 0, .1)",
                      },
                    }),
                  },

                  Input: {
                    styles: (theme) => ({
                      input: {
                        borderColor:
                          theme.colors.violet[theme.fn.primaryShade()],
                      },
                    }),
                  },
                },
              }}
            >
              <h2>Update Settings</h2>
              <Switch
                label="Show Completed ToDos"
                color="violet"
                checked={state.checked}
                onChange={(event) =>
                  state.setChecked(event.currentTarget.checked)
                }
                className="switch"
              />
              <NumberInput
                mt="xl"
                label="Items Per Page"
                placeholder={3}
                onChange={state.setNumOfTasks}
              />
              <Select
                label="Sort Keyword"
                placeholder="Pick one"
                data={[
                  { value: "difficulty", label: "Difficulty" },
                  { value: "completion", label: "Completion" },
                ]}
                onChange={state.setSortStandard}
              />
            </MantineProvider>
            <div className="btnsContain">
              <button className="settingsBtn" onClick={state.updateSettings}>
                Show New Settings
              </button>
              <button onClick={state.resetSettings} className="resetBtn">
                Reset Previous Settings
              </button>
            </div>
          </div>
          <div className="updatED">
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              target="_blank"
              className="card"
            >
              <Text weight={500} size={30} mt="md" className="updatedTitle">
                Updated Settings
              </Text>

              <Text mt="xs" color="black" size="lg" className="updatedText">
                {state.checked
                  ? "Show Completed ToDos"
                  : "Don't Show Completed ToDos"}
              </Text>
              <Text mt="xs" color="black" size="lg" className="updatedText">
                Items Per Page {state.numOfTasks}
              </Text>
              <Text mt="xs" color="black" size="lg" className="updatedText">
                Sort Keyword: {state.sortStandard}
              </Text>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modification;
