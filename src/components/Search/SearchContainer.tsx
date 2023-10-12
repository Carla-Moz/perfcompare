import React from 'react';

import Typography from '@mui/material/Typography';

import { searchView } from '../../common/constants';
import { Strings } from '../../resources/Strings';
import { SearchContainerStyles } from '../../styles';
import type { ThemeMode } from '../../types/state';
import CompareOverTime from './CompareOverTime';
import CompareWithBase from './CompareWithBase';

const strings = Strings.components.searchDefault;

function SearchContainer(props: SearchViewProps) {
  const { themeMode } = props;
  const styles = SearchContainerStyles(themeMode, searchView);

  return (
    <section
      data-testid='search-section'
      ref={props.containerRef}
      className={styles.container}
    >
      <Typography className='search-default-title'>{strings.title}</Typography>
      <CompareWithBase mode={themeMode} />
      {/* hidden until post-mvp release */}
      <CompareOverTime mode={themeMode} />
    </section>
  );
}

interface SearchViewProps {
  themeMode: ThemeMode;
  containerRef: React.RefObject<HTMLElement>;
}

export default SearchContainer;
