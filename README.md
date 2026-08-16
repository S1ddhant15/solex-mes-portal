# Solex Manufacturing Analytics

GitHub Pages prototype for department-controlled manufacturing analytics and Power BI access.

## Shared Employee ID login

MES uses the central Digital Operations Portal session (`solexPortalSession`). Direct visits to this repository redirect to:

`/solex-digital-portal/index.html?app=mes`

After a valid central login, the requested MES workspace opens full viewport inside the Digital Operations Portal.

## Dashboard access matrix

| Central portal department | Visible MES dashboards |
| --- | --- |
| Production | Main Page + Production; opens Production by default |
| Quality | Main Page + Quality & Process; opens Quality & Process by default |
| Maintenance | Main Page + Maintenance; opens Maintenance by default |
| Process Engineering | Main Page + Process; opens Process by default |
| PPC | Main Page + Production planning view; opens Production by default |
| Management | Overview, Production, Process, Maintenance and Reports |
| Operations Excellence / Administrator | All dashboards and Settings |

The sidebar is built only from Main Page plus the authorised department page. `dashboard.html?page=...` is validated before the Power BI iframe loads, and each login opens its department dashboard by default.

## Central prototype credentials

| Employee ID | Password | Access profile |
| --- | --- | --- |
| SX1001 | Admin@123 | MES Administrator |
| SX2001 | Maint@123 | Main Page + Maintenance |
| SX3001 | Prod@123 | Main Page + Production |
| SX4001 | Quality@123 | Main Page + Quality & Process |
| SX4501 | Process@123 | Main Page + Process |
| SX6001 | Ppc@123 | Production planning view |
| SX7001 | Manage@123 | Management views |

Users and application assignments are maintained in the central portal's `assets/config.js`, not in this repository.

## GitHub Pages deployment

Upload this package to the root of the `solex-mes-portal` repository and publish the `main` branch from `/(root)`.

## Security warning

GitHub Pages and these JavaScript permissions provide presentation-level navigation control only. For production security, enforce identity and department access through a secure backend or Microsoft Entra ID and apply Power BI workspace permissions/RLS. Hiding report tabs does not replace Power BI authorization.
