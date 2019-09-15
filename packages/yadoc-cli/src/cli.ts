#!/usr/bin/env node

import commander from 'commander';
import chalk from 'chalk';
import * as tmp from 'temp';
import { Repository, Remote, Config, Cred, Indexer } from 'nodegit';
import * as fs from 'fs';
import * as path from 'path';

import uuid from 'uuid';

import { ICommand } from './commands/ICommand';
import { IYadocDefinition } from './model.ts/yadoc-definition';

const yadocFilename = '_yadoc.json';


/*commander
    .version(project.version)
    .description(project.description)
*/
commander
    .command('yadoc <output>')
    .description('generate doc application')
    .option('-f, --file <config>', 'Set where we can find config file')
    .action((output: string, option) => {
        try {
            console.log(output)
            // test if _deepdoc file exists on current path or in options
            const where = path.join(output ? output : process.cwd(), yadocFilename);
            const bExists = fs.existsSync(where);
            if (!bExists) {
                throw new Error(`Cannot find ${yadocFilename}`);
            }

            const yadoc = JSON.parse(fs.readFileSync(where, { encoding: 'utf8' })) as IYadocDefinition[];


            // create tmp directory
            const tmpObj = tmp.mkdirSync();

            // client app is in output path
            // no, we need to clone it
            // yes, only update assets directory

            // with deepdoc file,
            // create directory for each program
            yadoc.forEach(p => {
                fs.mkdirSync(path.join(tmpObj, p.id));

                // create directory for each project in each program
                p.projects.forEach(pj => {
                    pj._id = pj._id ? pj._id : uuid.v1();
                    const repoPath = path.join(tmpObj, p.id, pj._id);
                    fs.mkdirSync(repoPath);

                    // create git version ?

                    // clone doc directory from each repository declared in deepdoc file
                    let current_repository: Repository;
                    Repository.init(repoPath, 0)
                        .then((repository: Repository) => {
                            current_repository = repository;
                            const err = Remote.setUrl(repository, 'origin', pj.repository);
                            return Config.openDefault();
                        })

                        .then(config => {
                            config.setInt64('core.sparseCheckout', 1);
                            fs.appendFileSync(path.join(repoPath, '.git/info/sparse-checkout'), 'docs/');
                            return current_repository.fetchAll( { 
                                callbacks: { 
                                    credentials: (url: string, userName: string ) => {
                                        return Cred.sshKeyFromAgent(userName)
                                    },
                                    certificateCheck: () => {
                                        return 1;
                                    },
                                
                                }
                            });
                        })

                        .then(() => {
                            console.log(chalk.green(`command vomplete in ${tmpObj}.`))
                        })

                        .catch(err => {
                            console.log(chalk.red('command run failed.'))
                        })
                    // build _chapters.json (list each md doc)
                    // copy yadoc file  in out dir
                    // in yadoc, create _id (projectid and ownerId )
                })
            })

        } catch (ex) {
            console.log(chalk.red('command run failed.'))
        }
    });

if (!process.argv.slice(2).length/* || !/[arudl]/.test(process.argv.slice(2))*/) {
    commander.outputHelp();
    process.exit();
}

commander.parse(process.argv);