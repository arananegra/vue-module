import { Member, createDefaultMember } from "../../model/member";
import { checkStatus } from "./common";

const resolveMembers = (data: any): Promise<Member[]> => {
  const members = data.map(gitHubMember => {
    var member: Member = createDefaultMember();

    member.id = gitHubMember.id;
    member.login = gitHubMember.login;
    member.avatar_url = gitHubMember.avatar_url;

    return member;
  });

  return Promise.resolve(members);
};

export const getAllMembers = (organizationName: string): Promise<Member[]> => {
  const githubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

  return fetch(githubMembersUrl)
    .then(response => checkStatus(response))
    .then(response => response.json())
    .then(data => resolveMembers(data));
};