function postSummary(issue) {
  const more_regex = /<!--\s*more\s*-->/
  const created_regex = /<!--\s*datetime:\s*(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\s*-->/
  const splited = issue.split(more_regex)

  if (splited.length <= 1) {
    return { summary: '', created: null, main: issue }
  }

  match = splited[0].match(created_regex)
  if (match == null) {
    return { summary: splited[0], created: null, main: issue }
  }

  splited[0] = splited[0].replace(created_regex, '')

  return {
    summary: splited[0],
    created: match[1],
    main: splited.join(''),
  }
}

module.exports = postSummary
