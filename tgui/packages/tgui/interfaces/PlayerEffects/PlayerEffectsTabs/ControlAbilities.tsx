// OV FILE
import { useBackend } from 'tgui/backend';
import { Button, Section } from 'tgui-core/components';

export const ControlAbilities = (props) => {
  const { act } = useBackend();

  return (
    <Section title="Grant Abilities">
      <Button fluid onClick={() => act('none')}>
        WIP
      </Button>
    </Section>
  );
};
