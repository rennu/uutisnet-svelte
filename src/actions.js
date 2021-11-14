import { error } from './stores'

export function showError (_error) {
  error.update(() => _error)
}
