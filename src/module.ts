import { PanelPlugin } from '@grafana/data';
import { SimpleOptions,DemoFieldConfig } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin =
  new PanelPlugin<SimpleOptions, DemoFieldConfig>(SimplePanel)
    .setPanelOptions(builder => {
      builder.addRadio({
        path: 'fontFace',
        name: 'Font face',
        settings: {
          options: [
            {
              value: 'sans-serif',
              label: 'Sans-serif'
            },
            {
              value: 'monospace',
              label: 'Monospace'
            }
          ]
        },
        defaultValue: 'monospace',
      })

        .addTextInput({
          path: 'text',
          name: 'Simple text option',
          description: 'Description of panel option',
          defaultValue: 'Default value of text input option',
        })
        .addBooleanSwitch({
          path: 'showSeriesCount',
          name: 'Show series counter',
          defaultValue: false,
        })
        .addRadio({
          path: 'seriesCountSize',
          defaultValue: 'sm',
          name: 'Series counter size',
          settings: {
            options: [
              {
                value: 'sm',
                label: 'Small',
              },
              {
                value: 'md',
                label: 'Medium',
              },
              {
                value: 'lg',
                label: 'Large',
              },
            ],
          },
          showIf: config => config.showSeriesCount,
        });
    })
    .useFieldConfig({
      useCustomConfig: (builder) => {
        builder.addRadio({
          path: 'shape',
          name: 'Shape',
          settings: {
            options: [
              { value: 'triangle', label: 'Triangle' },
              { value: 'circle', label: 'Circle' }
            ],
          },
          defaultValue: 'circle'
        })
      }
    })

  ;
