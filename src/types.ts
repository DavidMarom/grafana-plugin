type SeriesSize = 'sm' | 'md' | 'lg';

export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
}

export interface DemoFieldConfig {
  shape: 'triangle' | 'circle ' | 'square';
}