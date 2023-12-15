import attributes from './attributes.json';
import { StoryWrapper } from '../StoryWrapper/StoryWrapper';
import { NavbarLinksGroup } from './NavbarLinksGroup';

export default { title: 'NavbarLinksGroup' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={NavbarLinksGroup} />;
}
