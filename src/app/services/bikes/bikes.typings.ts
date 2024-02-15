type BikeStatus = 'with owner' | 'stolen';

export interface Bike {
  id: string;
  title: string;
  status: BikeStatus;
  serial: string;
  manufacturer_name: string;
  frame_colors: string[];
  thumbnail: string;
  large_img: string;
}
