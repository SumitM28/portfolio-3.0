export type Skill = {
  id: number;
  name: string;
  img: string;
};

export type SkillsData = {
    [x:string]:Skill[]
};

export type projectDataType = {
  name: string;
  category: string;
  description: string;
  github: string;
  live: string;
  img: string;
};
