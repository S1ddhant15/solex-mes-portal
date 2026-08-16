# Solex MES Portal

GitHub Pages prototype for department-controlled MES and Power BI access.

## Shared Employee ID login

MES uses the central Digital Operations Portal session (`solexPortalSession`). Direct visits to this repository redirect to:

`/solex-digital-portal/index.html?app=mes`

After a valid central login, the requested MES workspace opens full viewport inside the Digital Operations Portal.

## Dashboard access matrix

| Central portal department | Visible MES dashboards |
| --- | --- |
| Production | Production only |
| Quality | Quality & Process only |
| Maintenance | Maintenance only |
| Process Engineering | Process only |
| PPC | Production only |
| Management | Overview, Production, Process, Maintenance and Reports |
| Operations Excellence / Administrator | All dashboards and Settings |

The sidebar is built only from authorised pages. `dashboard.html?page=...` is also validated before the Power BI iframe loads, so an unauthorised page request falls back to the user's assigned dashboard.

## Central prototype credentials

| Employee ID | Password | Access profile |
| --- | --- | --- |
| SX1001 | Admin@123 | MES Administrator |
| SX2001 | Maint@123 | Maintenance only |
| SX3001 | Prod@123 | Production only |
| SX4001 | Quality@123 | Quality & Process only |
| SX4501 | Process@123 | Process only |
| SX6001 | Ppc@123 | Production planning view |
| SX7001 | Manage@123 | Management views |

Users and application assignments are maintained in the central portal's `assets/config.js`, not in this repository.

## GitHub Pages deployment

Upload this package to the root of the `solex-mes-portal` repository and publish the `main` branch from `/(root)`.

## Security warning

GitHub Pages and these JavaScript permissions provide presentation-level navigation control only. For production security, enforce identity and department access through a secure backend or Microsoft Entra ID and apply Power BI workspace permissions/RLS. Hiding report tabs does not replace Power BI authorization.
