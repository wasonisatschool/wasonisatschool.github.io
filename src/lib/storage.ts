'use client';
import { Article, Project } from './types';
import { seedArticles, seedProjects } from '../data/seed';

const ARTICLES_KEY = 'wason_articles';
const PROJECTS_KEY = 'wason_projects';

export function getArticles(): Article[] {
  if (typeof window === 'undefined') return seedArticles;
  const stored = localStorage.getItem(ARTICLES_KEY);
  if (!stored) {
    localStorage.setItem(ARTICLES_KEY, JSON.stringify(seedArticles));
    return seedArticles;
  }
  return JSON.parse(stored);
}

export function saveArticles(articles: Article[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
}

export function getProjects(): Project[] {
  if (typeof window === 'undefined') return seedProjects;
  const stored = localStorage.getItem(PROJECTS_KEY);
  if (!stored) {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(seedProjects));
    return seedProjects;
  }
  return JSON.parse(stored);
}

export function saveProjects(projects: Project[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find(a => a.slug === slug);
}

export function upsertArticle(article: Article): void {
  const articles = getArticles();
  const idx = articles.findIndex(a => a.id === article.id);
  if (idx >= 0) articles[idx] = article;
  else articles.unshift(article);
  saveArticles(articles);
}

export function deleteArticle(id: string): void {
  saveArticles(getArticles().filter(a => a.id !== id));
}

export function upsertProject(project: Project): void {
  const projects = getProjects();
  const idx = projects.findIndex(p => p.id === project.id);
  if (idx >= 0) projects[idx] = project;
  else projects.unshift(project);
  saveProjects(projects);
}

export function deleteProject(id: string): void {
  saveProjects(getProjects().filter(p => p.id !== id));
}
