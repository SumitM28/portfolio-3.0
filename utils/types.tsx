import { z } from "zod";
export type Skill = {
  id: number;
  name: string;
  img: string;
};

export type SkillsData = {
  [x: string]: Skill[];
};

export type projectDataType = {
  name: string;
  category: string;
  description: string;
  github: string;
  live: string;
  img: string;
};

export type formData = {
  email: string;
  message: string;
  name: string;
  phone: string;
};

export type userInfoType={
  name:string,
  phone:string,
  email:string,
  message:string
}

// Define schema using Zod
export const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(7).max(15),
  message: z.string().min(10).max(500),
});
