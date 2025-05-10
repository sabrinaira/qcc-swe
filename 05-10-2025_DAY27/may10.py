class A:
  def __init__(self):
    self._company='codeCamp'
    self._ssn='1001012'
  def __str__(self):
    return "The name of the company {}, the ssn is ".format(self_company)

item1=A()


class B:
  class_var='CompanyB'
  @classmethod
  def class_methodB(cls):
    print("print a message form a class method-class variable-{}".format(cls.class_var))
  @staticmethod
  def static_method():
    print('print a msg from a static method')