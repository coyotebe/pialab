
import {BaseModel} from '@api/model/base.model'

export class Pia extends BaseModel {
  public id: any;
  public status = 0; // 0: doing, 1: refused, 2: simple_validation, 3: signed_validation, 4: archived
  public name: string;
  public author_name: string;
  public evaluator_name: string;
  public validator_name: string;
  public dpo_status: number; // 0: NOK, 1: OK
  public dpo_opinion: string;
  public concerned_people_opinion: string;
  public concerned_people_status: number; // 0: NOK, 1: OK
  public concerned_people_searched_opinion: boolean; // 0 : false, 1: true
  public concerned_people_searched_content: string;
  public rejected_reason: string;
  public applied_adjustements: string;
  public dpos_names: string;
  public people_names: string;
  public progress: number;
  public is_example = false;

  public numberOfQuestions = 36; // TODO Auto calcul questions number
}
