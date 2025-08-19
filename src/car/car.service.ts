import { CarModel } from "./car.model";

export const CarService = {
  getAllCars: () => CarModel.findAll(),
  getCarById: (id: number) => CarModel.findById(id),
  addCar: (data: { vendorId: number; brand: string; model: string; pricePerDay: number }) =>
    CarModel.create(data),
  editCar: (id: number, data: Partial<{ brand: string; model: string; pricePerDay: number }>) =>
    CarModel.update(id, data),
  removeCar: (id: number) => CarModel.delete(id),
};
