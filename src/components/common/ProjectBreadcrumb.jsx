import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default function ProjectBreadCrumb({ projectName, children }) {
  return (
    <Breadcrumb className="mt-3">
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="/projects">Projects</a>
      </BreadcrumbItem>
      {children ? (
        children
      ) : (
        <BreadcrumbItem active>{projectName}</BreadcrumbItem>
      )}
    </Breadcrumb>
  );
}
