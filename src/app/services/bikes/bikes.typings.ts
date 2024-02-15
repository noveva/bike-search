type BikeStatus = 'with owner' | 'stolen';

export interface Bike {
  id: number;
  title: string;
  description: string;
  status: BikeStatus;
  serial: string;
  manufacturer_name: string;
  frame_colors: string[];
  thumb: string;
  large_img: string;
}
