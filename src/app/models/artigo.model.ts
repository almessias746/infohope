import { Model } from '../core/model';

export class Artigo extends Model {
    title?: string;
    key?: string;
    date: Date = new Date();
    content?: string;
    description?: string;
    imageUrl?: string;
    perfil?: string;
  }