import { ALL_LOADERS, ALL_METADATA, Catalog } from '../components/loader';
import { ComponentsLoader, NavList } from '../components/loader/types';

export function pagination(section: Catalog, page = 1, limit = 4) {
  const loader: ComponentsLoader = ALL_LOADERS[section];

  if (!loader) throw new Error('Section not found');

  const totalElements = Object.keys(loader).length;
  const totalPages = Math.ceil(totalElements / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const components = Object.entries(loader).slice(startIndex, endIndex);
  const hastNextPage = page < totalPages;
  const hastPrevPage = page > 1;

  return {
    components,
    page,
    limit,
    totalElements,
    totalPages,
    hastNextPage,
    hastPrevPage,
    section,
  };
}

export function getMetadataSection(section: Catalog) {
  return ALL_METADATA[section];
}

export function getCategoryNavigationLinks() {
  return Object.entries(ALL_METADATA).map(([_, values]) => ({
    title: values.title,
    icon: values.icon,
  }));
}

export function getCatalogCategoriesData(): NavList[] {
  return Object.entries(ALL_METADATA).map(([key, value]) => ({
    title: value.title,
    icon: value.icon,
    description: value.description,
    color: value.color,
    numberComponents: Object.keys(ALL_LOADERS[key]).length,
  }));
}
