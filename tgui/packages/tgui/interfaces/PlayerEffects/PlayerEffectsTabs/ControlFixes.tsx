// OV FILE
import { useBackend } from 'tgui/backend';
import { Button, Section } from 'tgui-core/components';

export const ControlFixes = (props) => {
  const { act } = useBackend();

  return (
    <Section title="Bug Fixes">
      <Button fluid onClick={() => act('rejuvenate')}>
        Rejuvenate
      </Button>
      <Button fluid onClick={() => act('popup-box')}>
        Send Message Box
      </Button>
    </Section>
  );
};
