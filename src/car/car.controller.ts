import { Request, Response } from "express";
import { CarService } from "./car.service";

export const CarController = {
  getCars: async (_req: Request, res: Response) => {
    const cars = await CarService.getAllCars();
    res.json(cars);
  },

  getCar: async (req: Request, res: Response) => {
    const car = await CarService.getCarById(Number(req.params.id));
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.json(car);
  },

  createCar: async (req: Request, res: Response) => {
    const car = await CarService.addCar(req.body);
    res.status(201).json(car);
  },

  updateCar: async (req: Request, res: Response) => {
    const car = await CarService.editCar(Number(req.params.id), req.body);
    res.json(car);
  },

  deleteCar: async (req: Request, res: Response) => {
    await CarService.removeCar(Number(req.params.id));
    res.json({ message: "Car deleted" });
  },
};
