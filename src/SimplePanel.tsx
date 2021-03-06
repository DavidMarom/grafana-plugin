import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> { }

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();
  const styles = getStyles();
  console.log('aaaaaaaaaa', data)
  return (
    <div className={cx(styles.wrapper, css`width: ${width}px;height: ${height}px;`)}>
      {/* <svg className={styles.svg} width={width} height={height} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}>
        <g><circle style={{ fill: `${theme.isLight ? theme.palette.greenBase : theme.palette.blue95}` }} r={10} /></g>
      </svg> */}

      <div className={styles.myShape}>
        <div className={styles.center}>
          <h2>{data.series[0].name}</h2>
        </div>
      </div>

      <div className={styles.textBox}>
        {options.showSeriesCount && (
          <div
            className={css`
              font-size: ${theme.typography.size[options.seriesCountSize]};
            `}
          >
            Number of series: {data.series.length}
          </div>
        )}
        <div>Text option value: {options.text}</div>
      </div>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    myShape: css`
      background-color: #00aa00;
      border-radius: 30px;
      width:100%;
      height:100%;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
      color: #FFFFFF;
    `,
    center: css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    `
  };
});
